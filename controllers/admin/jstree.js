/**
 * GET /
 * Home page.
 */
exports.adminJstree = (req, res) => {
  res.render('admin/jstree', {
    title: 'JSTree',
	subtitle: 'json and js JSTree examples',
  });
};
