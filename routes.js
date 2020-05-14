var http = require("http");
var express = require('express');
//init app
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname,'public')));
var urlencodedParser = bodyParser.urlencoded({ extended: true });
// Running Server Details.
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port);
});




app.get('/', function(req,res){
	res.sendFile(path.join( __dirname,'public','homepage.html'));
	console.log("Entered Login Page!!!");
});
app.get('/admin', function(req,res){
	res.sendFile(path.join( __dirname,'public','admin_login.ejs'));
	console.log("Entered Admin Login Page!!!");
});
app.get('/login', function(req,res){
	res.sendFile(path.join( __dirname,'public','login.html'));
	console.log("Entered Login Page!!!");
});
app.get('/about', function(req,res){
	res.sendFile(path.join( __dirname,'public','aboutus.html'));
	console.log("Entered Login Page!!!");
});
