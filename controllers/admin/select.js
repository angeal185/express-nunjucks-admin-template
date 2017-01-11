/**
 * GET /
 * Home page.
 */
exports.adminSelect = (req, res) => {
  res.render('admin/select', {
    title: 'Select',
	subtitle: 'Select examples in json format.',
	sub1: 'Select the desired local time and time zone.',
	sub2: 'A role defines a group of users that have certain privileges.',
	sub3: 'Enter a comma-separated list. For example: HTML, CSS, JavaScript, ...'
  });
};
