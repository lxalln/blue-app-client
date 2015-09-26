var express = require('express');
var app     = express();
var SignalRJS = require('signalrjs');
var http = require('http').Server(app);

var exphbs      = require('express-handlebars');
var helpers = require('./modules/helpers');

var config      = require('./modules/config');
var logger      = require('./modules/Logger');


// signalR server

// Init SignalRJs
var signalR = SignalRJS();

// hack hack hack!

signalR.poll = function(req,res){
	var self = this;
	var token = req.signalrjs.token;
	this._connectionManager.updateConnection(req.signalrjs.token,res);
	setTimeout(function(){
		var connection = self._connectionManager.getByToken(token);
        if(typeof(connection) === 'undefined'){
            return;
        }
		var transport = self._transports[connection.type];
		if(transport)
			transport.send(connection.connection,[]);
	},30000);
};

var state = {
    type: 'init',
    statements: [
        {
            Message : "Test statement A",
            User : "user1",
            Timestamp: new Date()
        },
        {
            Message : "Test statement B",
            User: "user2",
            Timestamp: new Date(new Date().getTime() + (20*60*1000))
        }
    ]
}

//Create the hub connection
//NOTE: Server methods are defined as an object on the second argument
signalR.hub('blueApp',{
    broadcast : function(fromUserName, message){
        var json = JSON.parse(message);

        if(json.type == 'statement'){
            var statement = json.statement;
            state.statements.unshift(statement);
        }

		this.clients.all.invoke('onTransmit').withArgs([fromUserName,message])
		console.log('broadcasting:'+message);
	},
	sendToUser : function(fromUserName, toUserName, message){
        if(toUserName == 'server' && message == 'init'){
            var stateString = JSON.stringify(state);

            this.clients.user(fromUserName).invoke('onTransmit').withArgs(['server', stateString])
        }
        else{
            this.clients.user(toUserName).invoke('onTransmit').withArgs([fromUserName,message])
        }

		console.log('sendToUser from('+fromUserName+') to('+toUserName+') message:'+message);
	}
});

console.log('Creating signalR listener');
app.use(signalR.createListener());

// end signalR server

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main', helpers:helpers}));
app.set('view engine', '.hbs');

app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));

app.get('/client', function(req,res) {
  res.sendfile('client.html');
});

require('./controller/sign-in.js')(app);
require('./controller/send-reaction.js')(app);
require('./controller/feed.js')(app);
require('./controller/chat.js')(app);
require('./controller/statement.js')(app);

var port = process.env.port || 5000;

http.listen(port, function(){
  logger.pipe('Server started via "http" and listening on ' + port, 'success');
});

signalR.on('CONNECTED',function(){
	console.log('connected');
});
