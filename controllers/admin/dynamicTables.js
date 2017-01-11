/**
 * GET /
 * Home page.
 */
exports.adminDynamicTables = (req, res) => {
  res.render('admin/dynamicTables', {
    title: 'DynamicTables',
	subtitle: 'Dynamic tables examples.',
	header1: 'Dynamic Table',
	detail1: 'The following shows how to produce a basic dynamic table.',
	header2: 'DataTables with search box',
	detail2: 'The following shows how to produce a basic dynamic table wiith search-box.',
	Name: 'Add name',
	Subject: 'Add a subject here',
	avatar: '/img/avatar.jpg',
	Spam: 'Mark this ticket as spam',
	Flag: 'Flag this ticket',
	Assign: 'Assigned to me',
	Date: '00-00-0000',
	Status: 'important',
	Priority: 'high'
  });
};
