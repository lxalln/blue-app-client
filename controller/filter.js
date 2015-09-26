var logger     = require('../modules/Logger');

module.exports = function(app)
{
    app.get('/filter', function(req, res){
      res.render('filter');
    });
};
