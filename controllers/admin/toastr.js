/**
 * GET /
 * Home page.
 */
exports.adminToastr = (req, res) => {
  res.render('admin/toastr', {
    title: 'Toastr',
	subtitle: 'Toastr examples.'
  });
};
