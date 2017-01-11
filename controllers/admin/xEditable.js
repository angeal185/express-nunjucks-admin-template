/**
 * GET /
 * Home page.
 */
exports.adminXEditable = (req, res) => {
  res.render('admin/xEditable', {
    title: 'x-editable',
  });
};

