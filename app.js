var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/users');
mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');

app.use(express.static('ejs'));

app.use(require('./routes/api'));

app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
});

app.listen(process.env.port || 7000, function(){
	console.log('Now listening to port 9000');
});