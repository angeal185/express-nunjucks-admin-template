/**
 * GET /
 * Home page.
 */
exports.adminPickers = (req, res) => {
  res.render('admin/pickers', {
    title: 'Pickers',
	subtitle: 'Picker examples.',
	header1: 'Date picker examples',
	header2: 'Time picker examples',
	sub1: 'jQuery Datepicker plugin',
	sub2: 'jQuery Timepicker plugin',
	Name: 'Add name',
	Subject: 'Add a subject here'
	
  });
};
