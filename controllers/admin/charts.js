/**
 * GET /
 * Home page.
 */
exports.adminCharts = (req, res) => {
  res.render('admin/charts', {
    title: 'Charts',
	subtitle: 'Charts examples using Chart.js.'
  });
};
