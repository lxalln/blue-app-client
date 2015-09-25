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

//Create the hub connection
//NOTE: Server methods are defined as an object on the second argument
signalR.hub('blueApp',{
    broadcast : function(fromUserName, message){
		this.clients.all.invoke('broadcast').withArgs([fromUserName,message])
		console.log('broadcasting:'+message);
	},
	sendToUser : function(fromUserName, toUserName, message){
		this.clients.user(toUserName).invoke('onPrivateMessage').withArgs([fromUserName,message])
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
  res.sendFile('client.html');
});

require('./controller/index.js')(app);
require('./controller/send-reaction.js')(app);

http.listen('5000', function(){
  logger.pipe('Server started via "http" and listening on 5000.', 'success');
});

signalR.on('CONNECTED',function(){
	console.log('connected');
});
