module.exports =  async function (req, res) {
  var title = req.body.title;
  var body = req.body.body;

  Articles.create({title:title, body:body}).exec(function(err){
    if(err){
      res.send(500, {error: 'Database Error'});
    }

    res.redirect('/articles/list');
  })
};