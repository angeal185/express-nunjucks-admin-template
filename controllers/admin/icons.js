/**
 * GET /
 * Home page.
 */
exports.adminIcons = (req, res) => {
  res.render('admin/icons', {
    title: 'Icons',
	subtitle: 'Icon examples.',
	avatar: '/img/avatar.jpg'
  });
};
