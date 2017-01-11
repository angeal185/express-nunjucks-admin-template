/**
 * GET /
 * Home page.
 */
exports.adminLabels = (req, res) => {
  res.render('admin/labels', {
    title: 'Labels',
	subtitle: 'Label examples',
	header1: 'Font size, paddings, colors, can be changed through variables.',
	Name: 'Add name here'
  });
};
