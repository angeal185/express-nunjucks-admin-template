/**
 * GET /
 * Home page.
 */
exports.adminSpinners = (req, res) => {
  res.render('admin/spinners', {
    title: 'Spinners',
	subtitle: 'Spinner examples.'
  });
};
