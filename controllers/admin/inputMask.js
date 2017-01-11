/**
 * GET /
 * Home page.
 */
exports.adminInputMask = (req, res) => {
  res.render('admin/inputMask', {
    title: 'Input mask',
	subtitle: 'Input mask examples.'
  });
};
