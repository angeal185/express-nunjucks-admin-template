/**
 * GET /
 * Home page.
 */
exports.adminLists = (req, res) => {
  res.render('admin/lists', {
    title: 'Lists',
	subtitle: 'Lists examples',	
	avatar: '/img/avatar.jpg',
	Name: 'Add name here',
	Date: 'Add date',
	header1: 'Examples that show how different components can be composed to produce lists.',
	header2: 'The following examples show how different components can be composed to produce material lists.'
  });
};
