/**
 * GET /
 * Home page.
 */
exports.adminArrows = (req, res) => {
  res.render('admin/arrows', {
    title: 'Arrows',
	subtitle: 'Arrow examples.'
  });
};