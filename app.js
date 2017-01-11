/*Module dependencies*/
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, 'uploads') });
const nunjucks = require('nunjucks');

/*Load environment variables from .env file, where API keys and passwords are configured*/
dotenv.load({ path: './config/.env.example' });
/*Controllers (app handlers)*/
/*Controllers (route handlers )*/
const indexController = require('./controllers/index');
const userController = require('./controllers/user');
const apiController = require('./controllers/api');
const contactController = require('./controllers/contact');


/*Controllers Admin (route handlers )*/
const adminController = require('./controllers/admin/index');
const adminArrowsController = require('./controllers/admin/arrows');
const adminBadgesController = require('./controllers/admin/badges');
const adminButtonsController = require('./controllers/admin/buttons');
const adminCardsController = require('./controllers/admin/cards');
const adminChartsController = require('./controllers/admin/charts');
const adminCropperController = require('./controllers/admin/cropper');
const adminDividersController = require('./controllers/admin/dividers');
const adminDynamicTablesController = require('./controllers/admin/dynamicTables');
const adminFilesController = require('./controllers/admin/files');
const adminFlagsController = require('./controllers/admin/flags');
const adminFormControlsController = require('./controllers/admin/formControls');
const adminFormLayoutsController = require('./controllers/admin/formLayouts');
const adminGoogleMapsController = require('./controllers/admin/googleMaps');
const adminGridSystemController = require('./controllers/admin/gridSystem');
const adminIconsController = require('./controllers/admin/icons');
const adminInputMaskController = require('./controllers/admin/inputMask');
const adminLabelsController = require('./controllers/admin/labels');
const adminListsController = require('./controllers/admin/lists');
const adminMdFormControlsController = require('./controllers/admin/mdFormControls');
const adminMdFormValidationController = require('./controllers/admin/mdFormValidation');
const adminPickersController = require('./controllers/admin/pickers');
const adminPricingCardsController = require('./controllers/admin/pricingCards');
const adminProfileController = require('./controllers/admin/profile');
const adminProgressBarsController = require('./controllers/admin/progressBars');
const adminSelectController = require('./controllers/admin/select');
const adminSlidersController = require('./controllers/admin/sliders');
const adminSpinnersController = require('./controllers/admin/spinners');
const adminStaticTablesController = require('./controllers/admin/staticTables');
const adminToastrController = require('./controllers/admin/toastr');
const adminTogglesController = require('./controllers/admin/toggles');
const adminTypographyController = require('./controllers/admin/typography');
const adminVectorMapsController = require('./controllers/admin/vectorMaps');
const adminJstreeController = require('./controllers/admin/jstree');
const adminXEditableController = require('./controllers/admin/xEditable');

/*API keys and Passport configuration.*/
const passportConfig = require('./config/passport');

/*Create Express server*/
const app = express();

/*Connect to MongoDB*/
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('connected', () => {
  console.log('%s MongoDB connection ok', chalk.green('✓'));
});
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/*Express configuration*/
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');
nunjucks.configure('views', {
    autoescape: true,
    express: app,
	noCache: true
});



app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  if (req.path === '/api/upload') {
    next();
  } else {
    lusca.csrf()(req, res, next);
  }
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use(function(req, res, next) {
  // After successful login, redirect back to the intended page
  if (!req.user &&
      req.path !== '/account/login' &&
      req.path !== '/account/signup' &&
      !req.path.match(/^\/auth/) &&
      !req.path.match(/\./)) {
    req.session.returnTo = req.path;
  }
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/*Primary app routes.*/
app.get('/', indexController.index);

/*Primary admin routes.*/
app.get('/admin', passportConfig.isAuthenticated, adminController.admin);
app.get('/admin/arrows', passportConfig.isAuthenticated, adminArrowsController.adminArrows);
app.get('/admin/badges', passportConfig.isAuthenticated, adminBadgesController.adminBadges);
app.get('/admin/buttons', passportConfig.isAuthenticated, adminButtonsController.adminButtons);
app.get('/admin/cards', passportConfig.isAuthenticated, adminCardsController.adminCards);
app.get('/admin/charts', passportConfig.isAuthenticated, adminChartsController.adminCharts);
app.get('/admin/cropper', passportConfig.isAuthenticated, adminCropperController.adminCropper);
app.get('/admin/dividers', passportConfig.isAuthenticated, adminDividersController.adminDividers);
app.get('/admin/dynamicTables', passportConfig.isAuthenticated, adminDynamicTablesController.adminDynamicTables);
app.get('/admin/files', passportConfig.isAuthenticated, adminFilesController.adminFiles);
app.get('/admin/flags', adminFlagsController.adminFlags);
app.get('/admin/formControls', passportConfig.isAuthenticated, adminFormControlsController.adminFormControls);
app.get('/admin/formLayouts', passportConfig.isAuthenticated, adminFormLayoutsController.adminFormLayouts);
app.get('/admin/googleMaps', passportConfig.isAuthenticated, adminGoogleMapsController.adminGoogleMaps);
app.get('/admin/gridSystem', passportConfig.isAuthenticated, adminGridSystemController.adminGridSystem);
app.get('/admin/icons', passportConfig.isAuthenticated, adminIconsController.adminIcons);
app.get('/admin/inputMask', passportConfig.isAuthenticated, adminInputMaskController.adminInputMask);
app.get('/admin/labels', passportConfig.isAuthenticated, adminLabelsController.adminLabels);
app.get('/admin/lists', passportConfig.isAuthenticated, adminListsController.adminLists);
app.get('/admin/mdFormControls', passportConfig.isAuthenticated, adminMdFormControlsController.adminMdFormControls);
app.get('/admin/mdFormValidation', passportConfig.isAuthenticated, adminMdFormValidationController.adminMdFormValidation);
app.get('/admin/pickers', passportConfig.isAuthenticated, adminPickersController.adminPickers);
app.get('/admin/pricingCards', passportConfig.isAuthenticated, adminPricingCardsController.adminPricingCards);
app.get('/admin/profile', passportConfig.isAuthenticated, adminProfileController.adminProfile);
app.get('/admin/progressBars', passportConfig.isAuthenticated, adminProgressBarsController.adminProgressBars);
app.get('/admin/select', passportConfig.isAuthenticated, adminSelectController.adminSelect);
app.get('/admin/sliders', passportConfig.isAuthenticated, adminSlidersController.adminSliders);
app.get('/admin/spinners', passportConfig.isAuthenticated, adminSpinnersController.adminSpinners);
app.get('/admin/staticTables', passportConfig.isAuthenticated, adminStaticTablesController.adminStaticTables);
app.get('/admin/toastr', passportConfig.isAuthenticated, adminToastrController.adminToastr);
app.get('/admin/toggles', passportConfig.isAuthenticated, adminTogglesController.adminToggles);
app.get('/admin/typography', passportConfig.isAuthenticated, adminTypographyController.adminTypography);
app.get('/admin/vectorMaps', passportConfig.isAuthenticated, adminVectorMapsController.adminVectorMaps);
app.get('/admin/jstree', passportConfig.isAuthenticated, adminJstreeController.adminJstree);
app.get('/admin/xEditable', passportConfig.isAuthenticated, adminXEditableController.adminXEditable);

app.get('/account/login', userController.getLogin);
app.post('/account/login', userController.postLogin);
app.get('/account/logout', userController.logout);
app.get('/account/forgot', userController.getForgot);
app.post('/account/forgot', userController.postForgot);
app.get('/account/reset/:token', userController.getReset);
app.post('/account/reset/:token', userController.postReset);
app.get('/account/signup', userController.getSignup);
app.post('/account/signup', userController.postSignup);
app.get('/contact', contactController.getContact);
app.post('/contact', contactController.postContact);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

/*API examples routes.*/
app.get('/api', apiController.getApi);
app.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
app.get('/api/github', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGithub);
app.get('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitter);
app.post('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postTwitter);
app.get('/api/linkedin', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getLinkedin);
app.get('/api/instagram', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getInstagram);
app.get('/api/upload', apiController.getFileUpload);
app.post('/api/upload', upload.single('myFile'), apiController.postFileUpload);
app.get('/api/google-maps', apiController.getGoogleMaps);

/*OAuth authentication routes. (Sign in)*/
app.get('/auth/instagram', passport.authenticate('instagram'));
app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/account/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/account/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/account/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/account/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/account/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/account/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});

/*globals*/
app.locals.website = 'https://angeal185.github.io';
app.locals.email = 'beneaves01@hotmail.com';
app.locals.JSV = 'javascript:void(0)';
app.locals.dc = 'data-chaffle';

/*Error Handler*/
app.use(errorHandler());

/*Start Express server*/
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});

module.exports = app;
