/**
 * GET /
 * Home page.
 */
exports.adminFormLayouts = (req, res) => {
  res.render('admin/formLayouts', {
    title: 'Form Layouts',
	subtitle: 'Form Layout examples.',
	header1: 'Default form',
	header2: 'Horizontal form',
	header3: 'Inline form',
	sub1: 'Default form example',
	sub2: 'Labels and fields are on the same row.',
	sub3: 'All elements are on the same row.'
	
  });
};
