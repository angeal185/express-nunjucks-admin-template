/**
 * GET /
 * Home page.
 */
exports.adminMdFormValidation = (req, res) => {
  res.render('admin/mdFormValidation', {
    title: 'Md Form Validation',
	subtitle: 'Md Form Validation examples.',
	label: 'Add label here...'
  });
};
