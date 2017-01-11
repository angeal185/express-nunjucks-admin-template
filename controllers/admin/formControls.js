/**
 * GET /
 * Home page.
 */
exports.adminFormControls = (req, res) => {
  res.render('admin/formControls', {
    title: 'Form Controls',
	subtitle: 'Form Control examples.',
	Name: 'Add name',
	Subject: 'Add a subject here'
  });
};
