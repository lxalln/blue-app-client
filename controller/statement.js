var logger = require('../modules/Logger');
var state = require('../modules/state');

module.exports = function(app)
{
    function filterData(statements) {
      for (var i = 0, x = statements.length; i < x; i++) {
          var statement = statements[i];

          if(typeof(statement.emoji) !== 'undefined'){
              var emoji = {};
              for(j = 0; j < statement.emoji.length){
                var currentEmoji = statement.emoji[j];
                if(typeof(emoji[currentEmoji]) === 'undefined'){
                    emoji[currentEmoji] = 1;
                }
                else{
                    emoji[currentEmoji] = emoji[currentEmoji] + 1;
                }
              }

              statement.emojiHash = emoji;
          }

          if(typeof(statement.encouragements) !== 'undefined'){
              var encouragements = {};
              for(j = 0; j < statement.encouragements.length){
                var currentEncouragement = statement.encouragements[j];
                if(typeof(encouragements[currentEncouragement]) === 'undefined'){
                    encouragements[currentEncouragement] = 1;
                }
                else{
                    encouragements[currentEncouragement] = encouragements[currentEncouragement] + 1;
                }
              }
            statement.encuragementHash = encouragements;
          }

          if(typeof(statement.messages) !== 'undefined'){
              var messages = {};
              for(j = 0; j < statement.messages.length){
                var currentMessage = statement.messages[j];
                if(typeof(messages[currentMessage]) === 'undefined'){
                    messagesmessages[currentMessage] = 1;
                }
                else{
                    messages[currentMessage] = messages[currentMessage] + 1;
                }
              }
              statement.messagesHash = messages;
          }
      }
    }

filterData(state.statements);
    app.get('/statement', function(req, res) {
      var data = {
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
        ],
        messages: [
          {value: 'Hello there stay strong please', sender: ''},
          {value: 'I know how you feel, I was in the same situation some time ago', sender: ''}
        ]
      };
      res.render('statement', data);
    });
};
