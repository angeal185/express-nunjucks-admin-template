/**
 * GET /
 * Home page.
 */
exports.adminBadges = (req, res) => {
  res.render('admin/badges', {
    title: 'Badges',
	subtitle: 'Badges examples.'
  });
};
