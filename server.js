// CALL THE PACKAGES
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
// localhost:1337 (or a port of your choosing)
var port = process.env.PORT || 1337;


app.locals.pretty = true;
app.set('stylesheets', path.join(__dirname, 'public/stylesheets'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// the root of your host will be the 'public' folder
app.use(express.static('public'));

app.use(function(req, res, next){
	// allow cross server resources
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
	next();
});
// log non-200 HTML responses to console
app.use(morgan('dev'));

// ROUTES
// ------
// this is where you set up the routes to your HTML

app.get('/', function(req, res){
	res.render('index');
});

app.listen(port);
console.log('localhost:' + port + ' for the homepage');