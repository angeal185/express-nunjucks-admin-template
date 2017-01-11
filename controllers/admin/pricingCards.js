/**
 * GET /
 * Home page.
 */
exports.adminPricingCards = (req, res) => {
  res.render('admin/pricingCards', {
    title: 'Pricing Cards',
	subtitle: 'Pricing Card examples',
	header1: 'Single Pricing examples.',
	header2: 'A Pricing card can be distinguished from others to attract attention.',
	price: 'Add price here',
	option: 'Add option here',
	Name: 'Add title',
	deal: 'Add deal'
	
  });
};
