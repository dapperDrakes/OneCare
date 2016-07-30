var express = require('express');
var dbHelpers = require('../db/dbhelper.js');
var bodyParser = require('body-parser');
var app = express();


// app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/node_modules"));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running');
});

app.get('/fuckDan', function(req, res){
  console.log('request received at /fuckDan');
  res.send(JSON.stringify({"message": "Fuck Dan"}));
});
//add a script to the script collection 
app.post('/api/script/add', function(req, res) {
	var newScript = req.body; 
	dbHelpers.addScript(newScript, res); 
}); 
// locate a script will probably need to contain a username and scriptname optionally dosage
app.post('/api/script/find', function(req, res) {
	var findScript = req.body; 
	dbHelpers.getScripts( findScript, res); 
}); 


//signup
app.post('/api/signup', function(req, res, next) {
  var userSignup = req.body; 
  dbHelpers.signup(userSignup, res, next); 
});

app.post('/api/signin', function(req, res) {
  var userSignin = req.body;
  dbHelpers.signin(userSignin, res, next); 
})
