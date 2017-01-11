/**
 * GET /
 * Home page.
 */
exports.adminToggles = (req, res) => {
  res.render('admin/toggles', {
    title: 'Toggles',
	subtitle: 'Toggle examples',
	header: 'All the elements presented below are an expanded version of the standard HTML element.'
  });
};
