var logger     = require('../modules/Logger');

module.exports = function(app)
{
    app.get('/import', function(req, res){
      res.render('import');
    });
};
