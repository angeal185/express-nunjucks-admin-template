/**
 * GET /
 * Home page.
 */
exports.adminGoogleMaps = (req, res) => {
  res.render('admin/googleMaps', {
    title: 'GoogleMaps',
	subtitle: 'Examples using Gmaps.'
  });
};
