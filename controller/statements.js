var logger = require('../modules/Logger');


module.exports = function(app) {
      app.get('/statements', function(req, res) {

      var data = {
        statements: [ {
        id: 'Dallas',
        message: 'I had a bad mood after work...',
        emojiCount: '2',
        messageCount: '4'},
        {id: 'Dallas',
        message: 'This day i was at the hospital with my father. It was okay...',
        emojiCount: '5',
        messageCount: '4'}
      ],
      reactions: [ {
        id: 'Dallas',
        message: 'I had a bad mood after work...',
        emojiCount: '2',
        messageCount: '4'},
        {id: 'Dallas',
        message: 'This day i was at the hospital with my father. It was okay...',
        emojiCount: '5',
        messageCount: '4'}
        ]
      };


        res.render('statements', data);
  });
};

/*
statement2: { statement: 'Today im kind a feeling a little blueish since i have the new work..',
emojis: [
  {name: 'heart', image: 'images/heart.png', count: 2},
  {name: 'panda', image: 'images/panda.png', count: 3},
  {name: 'fistbump', image: 'images/fistbump.png', count: 0}
],
encouragements: [
  {value: 'I know how you feel', count: 4},
  {value: 'Heads up!', count: 2},
  {value: 'Stay strong!', count: 7}
],
messages: [
  {value: 'I was in the same situation one month ago...', sender: ''},
]}
}
*/
