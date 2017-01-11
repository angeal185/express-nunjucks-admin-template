/**
 * GET /
 * Home page.
 */
exports.adminButtons = (req, res) => {
  res.render('admin/buttons', {
    title: 'Buttons',
	subtitle: 'Button examples.'
  });
};
