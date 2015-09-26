var logger = require('../modules/Logger');
var state = require('../modules/state');

module.exports = function(app)
{
    function filterData(statements) {
      for (var i = 0, x = statements.length; i < x; i++) {
          var statement = statements[i];

          if(typeof(statement.emoji) !== 'undefined'){
              var distinctEmoji = [];
              var emoji = {};
              for(j = 0; j < statement.emoji.length; j++){
                var currentEmoji = statement.emoji[j];
                if(typeof(emoji[currentEmoji]) === 'undefined'){
                    emoji[currentEmoji] = 1;
                    distinctEmoji.push(currentEmoji);
                }
                else{
                    emoji[currentEmoji] = emoji[currentEmoji] + 1;
                }
              }

              var hash = [];
              for(var k = 0; k < distinctEmoji.length; k++){
                  var currentEmoji = distinctEmoji[k];
                  var count = emoji[currentEmoji];

                  hash.push({
                      name: currentEmoji,
                      count: count
                  });
              }

              statement.emojiHash = hash;
          }

          if(typeof(statement.encouragements) !== 'undefined'){
              var distinctEncouragements = [];
              var encouragements = {};
              for(j = 0; j < statement.encouragements.length; j++){
                var currentEncouragement = statement.encouragements[j];
                if(typeof(encouragements[currentEncouragement]) === 'undefined'){
                    encouragements[currentEncouragement] = 1;
                    distinctEncouragements.push(currentEncouragement);
                }
                else{
                    encouragements[currentEncouragement] = encouragements[currentEncouragement] + 1;
                }
              }

              var hash = [];
              for(var k = 0; k < distinctEncouragements.length; k++){
                  var currentEncouragement = distinctEncouragements[k];
                  var count = encouragements[currentEncouragement];

                  hash.push({
                      name: currentEncouragement,
                      count: count
                  });
              }

              statement.encuragementHash = hash;
          }

          if(typeof(statement.messages) !== 'undefined'){
              var distinctMessages = [];
              var messages = {};
              for(j = 0; j < statement.messages.length; j++){
                var currentMessage = statement.messages[j];
                if(typeof(messages[currentMessage]) === 'undefined'){
                    messagesmessages[currentMessage] = 1;
                    distinctMessages.push(currentMessage);
                }
                else{
                    messages[currentMessage] = messages[currentMessage] + 1;
                }
              }

              var hash = [];
              for(var k = 0; k < distinctMessages.length; k++){
                  var currentMessage = distinctMessages[k];
                  var count = messages[currentMessage];

                  hash.push({
                      name: currentMessage,
                      count: count
                  });
              }

              statement.messagesHash = hash;
          }
      }
    }

filterData(state.statements);
    app.get('/statement', function(req, res) {

      res.render('statement', state.statements);
    });
};
