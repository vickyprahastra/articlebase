module.exports =  async function (req, res) {

  Articles.find({}).exec(function(err, articles) {
    if (err) {
      res.send(500, {error: 'Database Error'});
    }
    return res.view('list', {articles:articles});
  })
};