var logger = require('../modules/Logger');

module.exports = function(app)
{
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
