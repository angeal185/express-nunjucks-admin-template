/**
 * GET /
 * Home page.
 */
exports.adminCards = (req, res) => {
  res.render('admin/cards', {
    title: 'Cards',
	avatar: '/img/avatar.jpg',
	Name: 'Add name',
	address: 'Add address here',
	header1: ' default',
	header2: ' with thumbnail',
	header3: ' with overlay'
  });
};
