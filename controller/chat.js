var logger = require('../modules/Logger');

module.exports = function(app)
{
    app.get('/chat', function(req, res) {
      var data = {
      }
      res.render('chat', data);
    });
};