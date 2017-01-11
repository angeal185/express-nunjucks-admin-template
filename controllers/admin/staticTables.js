/**
 * GET /
 * Home page.
 */
exports.adminStaticTables = (req, res) => {
  res.render('admin/staticTables', {
    title: 'StaticTables',
	subtitle: 'Static tables examples.',
	header1: 'Static Table',
	detail1: 'The following shows how to produce a basic static table.',
	header2: 'Static Table Report',
	detail2: 'The following example shows how to produce a real report by using the tables.',
	header3: 'Advanced Table Header',
	detail3: 'The following example shows how a more complex header can be in a table.',
	Name: 'Add name',
	Subject: 'Add a subject here'
  });
};
