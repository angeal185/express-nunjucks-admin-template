/**
 * GET /
 * Home page.
 */
exports.adminSliders = (req, res) => {
  res.render('admin/sliders', {
    title: 'Sliders',
	subtitle: 'Md Form Validation examples.',
	label: 'Add label here...',
	header1: 'Default examples',
	header2: 'Advanced examples',
	sub1: 'Default slider examples',
	sub2: 'Advanced slider examples',
	avatar: '/img/avatar.jpg'
  });
};
