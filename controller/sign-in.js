var logger = require('../modules/Logger');

module.exports = function(app)
{
    app.get('/', function(req, res){
      res.render('sign-in');
    });
};