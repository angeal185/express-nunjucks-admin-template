exports.error500 = (req, res) => {
  res.render('error/500', {
    title: 'Error-500'
  });
};

exports.error404 = (req, res) => {
  res.render('error/404', {
    title: 'Error-404'
  });
};