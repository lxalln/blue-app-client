var logger     = require('../modules/Logger');

module.exports = function(app)
{
    app.get('/send-reaction', function(req, res) {
      var statement = {
        image: 'images/profile-pic.jpg',
        statement: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
      }

      var emojis = [
        // TODO: add more emojis
        {name: 'heart', image: 'images/heart.png'},
        {name: 'panda', image: 'images/panda.png'},
        {name: 'fistbump', image: 'images/fistbump.png'}
      ];

      var encouragements = ['I know how you feel', 'Heads up!', 'Stay strong!'];

      var data = {
        statement: statement,
        emojis: emojis,
        encouragements: encouragements
      }
      res.render('send-reaction', data);
    });
};