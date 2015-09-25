var express = require('express');
var app     = express();
var http = require('http').Server(app);

var exphbs      = require('express-handlebars');
var helpers = require('./modules/helpers');

var config      = require('./modules/config');
var logger      = require('./modules/Logger');


app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main', helpers:helpers}));
app.set('view engine', '.hbs');

app.get('/client', function(req,res) {
  res.sendfile('client.html');
});

require('./controller/index.js')(app);

http.listen(5000, function(){
  logger.pipe('Server started via "http" and listening on 5000.', 'success');
});
