/**
 * GET /
 * Home page.
 */
exports.adminTypography = (req, res) => {
  res.render('admin/typography', {
    title: 'Typography',
	subtitle: 'Typography examples.',
	Name: 'Add name',
	Subject: 'Add a subject here',
	avatar: '/img/avatar.jpg'
  });
};
