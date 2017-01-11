/**
 * GET /
 * Home page.
 */
exports.adminGridSystem = (req, res) => {
  res.render('admin/gridSystem', {
    title: 'GridSystem',
	subtitle: 'Grid system examples.'
  });
};
