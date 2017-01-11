/**
 * GET /
 * Home page.
 */
exports.adminFiles = (req, res) => {
  res.render('admin/files', {
    title: 'Files',
	subtitle: 'Files examples.',
	header1: ' with delete button',
	sub1: ' can contain a button to delete it'
  });
};
