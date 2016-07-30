var express = require('express');
var bodyParser = require('body-parser');
var dbHelpers = require('../db/dbhelper.js');
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
  console.log('Server is running on port ', process.env.PORT || 3000 );
});

app.get('/fuckDan', function(req, res){
  console.log('request received at /fuckDan');
  res.send(JSON.stringify({"message": "Fuck Dan"}));
});

app.post('/api/script/add', function(req, res) {
	var newScript = req.body; 
	dbHelpers.addScript(newScript, res); 
}); 

app.post('/api/script/find', function(req, res) {
	var findScript = req.body; 
	dbHelpers.getScripts( findScript, res); 
}); 
