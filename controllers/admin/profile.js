/**
 * GET /
 * Home page.
 */
exports.adminProfile = (req, res) => {
  res.render('admin/profile', {
    title: 'Profile',
	Name: 'username',
	comment: 'comment from follower',
	avatar: '/img/avatar.jpg'
  });
};
