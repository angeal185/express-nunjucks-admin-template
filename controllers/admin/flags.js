/**
 * GET /
 * Home page.
 */
exports.adminFlags = (req, res) => {
  res.render('admin/flags', {
    title: 'Flags',
	subtitle: 'flags examples.'
  });
};
