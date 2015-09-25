var logger     = require('../modules/Logger');

module.exports = function(app)
{
    app.get('/', function(req, res){

      //Get Posts from database
      db.selectAll('posts', function(results) {
        if (results !== false) {
          //console.log(results);
          res.render('index', { data: results });
        }
      });
    });
};
