'use strict';
const _ = require('lodash');
const async = require('async');
const validator = require('validator');
const request = require('request');
const cheerio = require('cheerio');
const graph = require('fbgraph');
const Github = require('github-api');
const Twit = require('twit');
const Linkedin = require('node-linkedin')(process.env.LINKEDIN_ID, process.env.LINKEDIN_SECRET, process.env.LINKEDIN_CALLBACK_URL);
const ig = require('instagram-node').instagram();


/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};


/**
 * GET /api/facebook
 * Facebook API example.
 */
exports.getFacebook = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'facebook');
  graph.setAccessToken(token.accessToken);
  async.parallel({
    getMyProfile: (done) => {
      graph.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err, me) => {
        done(err, me);
      });
    },
    getMyFriends: (done) => {
      graph.get(`${req.user.facebook}/friends`, (err, friends) => {
        done(err, friends.data);
      });
    }
  },
  (err, results) => {
    if (err) { return next(err); }
    res.render('api/facebook', {
      title: 'Facebook API',
      me: results.getMyProfile,
      friends: results.getMyFriends
    });
  });
};


/**
 * GET /api/github
 * GitHub API Example.
 */
exports.getGithub = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'github');
  const github = new Github({ token: token.accessToken });
  const repo = github.getRepo('sahat', 'satellizer');
  repo.getDetails((err, repo) => {
    if (err) { return next(err); }
    res.render('api/github', {
      title: 'GitHub API',
      repo
    });
  });
};


/**
 * GET /api/twitter
 * Twitter API example.
 */
exports.getTwitter = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'twitter');
  const T = new Twit({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token: token.accessToken,
    access_token_secret: token.tokenSecret
  });
  T.get('search/tweets', { q: 'nodejs since:2013-01-01', geocode: '40.71448,-74.00598,5mi', count: 10 }, (err, reply) => {
    if (err) { return next(err); }
    res.render('api/twitter', {
      title: 'Twitter API',
      tweets: reply.statuses
    });
  });
};

/**
 * POST /api/twitter
 * Post a tweet.
 */
exports.postTwitter = (req, res, next) => {
  req.assert('tweet', 'Tweet cannot be empty').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/api/twitter');
  }

  const token = req.user.tokens.find(token => token.kind === 'twitter');
  const T = new Twit({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token: token.accessToken,
    access_token_secret: token.tokenSecret
  });
  T.post('statuses/update', { status: req.body.tweet }, (err, data, response) => {
    if (err) { return next(err); }
    req.flash('success', { msg: 'Your tweet has been posted.' });
    res.redirect('/api/twitter');
  });
};

/**
 * GET /api/linkedin
 * LinkedIn API example.
 */
exports.getLinkedin = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'linkedin');
  const linkedin = Linkedin.init(token.accessToken);
  linkedin.people.me((err, $in) => {
    if (err) { return next(err); }
    res.render('api/linkedin', {
      title: 'LinkedIn API',
      profile: $in
    });
  });
};

/**
 * GET /api/instagram
 * Instagram API example.
 */
exports.getInstagram = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'instagram');
  ig.use({ client_id: process.env.INSTAGRAM_ID, client_secret: process.env.INSTAGRAM_SECRET });
  ig.use({ access_token: token.accessToken });
  async.parallel({
    searchByUsername: (done) => {
      ig.user_search('richellemead', (err, users) => {
        done(err, users);
      });
    },
    searchByUserId: (done) => {
      ig.user('175948269', (err, user) => {
        done(err, user);
      });
    },
    popularImages: (done) => {
      ig.media_popular((err, medias) => {
        done(err, medias);
      });
    },
    myRecentMedia: (done) => {
      ig.user_self_media_recent((err, medias) => {
        done(err, medias);
      });
    }
  }, (err, results) => {
    if (err) { return next(err); }
    res.render('api/instagram', {
      title: 'Instagram API',
      usernames: results.searchByUsername,
      userById: results.searchByUserId,
      popularImages: results.popularImages,
      myRecentMedia: results.myRecentMedia
    });
  });
};

/**
 * GET /api/upload
 * File Upload API example.
 */
 
exports.getFileUpload = (req, res, next) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res, next) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};

exports.getGoogleMaps = (req, res, next) => {
  res.render('api/google-maps', {
    title: 'Google Maps API'
  });
};
