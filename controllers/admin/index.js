/**
 * GET /
 * Home page.
 */
exports.admin = (req, res) => {
  res.render('admin/index', {
    title: 'Dashboard'
  });
};
