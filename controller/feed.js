var logger = require('../modules/Logger');

module.exports = function(app)
{
    app.get('/feed', function(req, res) {
      var statements = [
        {
          image: '', 
          statement: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
          emojiCount: 0,
          messageCount: 1
        },
        {
          image: '', 
          statement: 'Donec ullamcorper nulla non metus auctor fringilla.',
          emojiCount: 3,
          messageCount: 0 
        },
        {
          image: '', 
          statement: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
          emojiCount: 2,
          messageCount: 1
        },
        {
          image: '', 
          statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
          emojiCount: 0,
          messageCount: 4
        },
        {
          image: '', 
          statement: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.',
          emojiCount: 6,
          messageCount: 2
        },
        {
          image: '', 
          statement: 'Cras mattis consectetur purus sit amet fermentum.',
          emojiCount: 0,
          messageCount: 0
        }
      ];

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
        };
      };

      filterData(statements);

      var data = {
        statements: statements
      }

      res.render('feed', data);
    });
};