/**
 * GET /
 * Home page.
 */
exports.adminProgressBars = (req, res) => {
  res.render('admin/progressBars', {
    title: 'Progress Bars',
	subtitle: 'Progress Bar examples',
	header1: 'Default Progress Bar examples.',
	header2: 'A progress bar may vary in size.',
	header3: 'A progress bar can show animated level of the current progress.',
	label: 'Add label here',
	Name: 'Add title',
	comp: '% complete'
  });
};
