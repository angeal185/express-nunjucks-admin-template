/**
 * GET /
 * Home page.
 */
exports.adminMdFormControls = (req, res) => {
  res.render('admin/mdFormControls', {
    title: 'Md Form Controls',
	subtitle: 'Md Form Control examples in json format.'
  });
};
