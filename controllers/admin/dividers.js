/**
 * GET /
 * Home page.
 */
exports.adminDividers = (req, res) => {
  res.render('admin/dividers', {
    title: 'Dividers',
	subtitle: 'Dividers examples.'
  });
};
