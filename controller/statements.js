var logger = require('../modules/Logger');
var state = require('../modules/state');

module.exports = function(app) {

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
        statements: [
          {
            id: '',
            image: '',
            statement: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            emojis: [
              {name: 'heart', image: 'images/heart.png', count: 3},
              {name: 'panda', image: 'images/panda.png', count: 9},
              {name: 'fistbump', image: 'images/fistbump.png', count: 5}
            ],
            encouragements: [
              {value: 'I know how you feel', count: 2},
              {value: 'Heads up!', count: 5},
              {value: 'Stay strong!', count: 1}
            ]
          },
          {
            id: '',
            image: '',
            statement: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            emojis: [
              {name: 'heart', image: 'images/heart.png', count: 3},
              {name: 'panda', image: 'images/panda.png', count: 9},
              {name: 'fistbump', image: 'images/fistbump.png', count: 5}
            ],
            encouragements: [
              {value: 'I know how you feel', count: 2},
              {value: 'Heads up!', count: 5},
              {value: 'Stay strong!', count: 1}
            ]
          }
      ],
      reactions: state.statements
      };

        res.render('statements', data);
  });
};
