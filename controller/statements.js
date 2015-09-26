var logger = require('../modules/Logger');
var state = require('../modules/state');

module.exports = function(app)
{
    app.get('/statements', function(req, res) {
      function filterData(statements) {
        for (var i = 0, x = statements.length; i < x; i++) {
          if(statements[i].emojiCount > 3) {
            statements[i].emojiCount = true;
          } else {
            statements[i].emojiCount = false;
          }

          if(statements[i].messageCount > 3) {
            statements[i].messageCount = true;
          } else {
            statements[i].messageCount = false;
          }
        }
      }

      filterData(state.statements);

      var data = {
        statements: state.statements
      };

      res.render('statements', data);
    });
};
