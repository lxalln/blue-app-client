var logger     = require('../modules/Logger');
var state = require('../modules/state');

module.exports = function(app)
{
    app.get('/send-reaction/:id', function(req, res) {

        var id = req.params.id;

        console.log(state);

        if(!state){
            res.status(404)        // HTTP status 404: NotFound
            .send('Not found');
            return;
        }

        var statements = state.statements;

        console.log('Looking for Id: ' + id);
        var statement;
        for(var i = 0; i < statements.length; i++){
            var loopingStatement = statements[i];

            console.log('Comparing: ');
            console.log(loopingStatement);

            if(loopingStatement.id == id){
                statement = loopingStatement;
                break;
            }
        }

      if(!statement){
          res.status(404)        // HTTP status 404: NotFound
          .send('Statement not found');
          return;
      }

      var emojis = [
        // TODO: add more emojis
        {name: 'heart', image: '/images/heart.png'},
        {name: 'panda', image: '/images/panda.png'},
        {name: 'fistbump', image: '/images/fistbump.png'}
      ];

      var encouragements = ['I know how you feel', 'Heads up!', 'Stay strong!'];

      var data = {
        statement: statement,
        emojis: emojis,
        encouragements: encouragements
      };
      res.render('send-reaction', data);
    });
};
