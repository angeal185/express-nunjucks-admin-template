/**
 * GET /
 * Home page.
 */
exports.adminCropper = (req, res) => {
  res.render('admin/cropper', {
    title: 'Cropper',
	subtitle: 'Cropper example.',
	avatar: '/img/avatar.jpg'
  });
};
