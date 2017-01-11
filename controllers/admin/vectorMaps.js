/**
 * GET /
 * Home page.
 */
exports.adminVectorMaps = (req, res) => {
  res.render('admin/vectorMaps', {
    title: 'VectorMaps',
	subtitle: 'Examples using JQVMap plugin.',
	topic: 'Add topic here',
	statistics: 'Add statistics here',
	Name: 'Add name',
	Subject: 'Add a subject here',
	avatar: '/img/avatar.jpg'
  });
};
