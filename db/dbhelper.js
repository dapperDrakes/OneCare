var Model = require('./db.js');

var dbFunc = {

	addScript: function(script, res) {
		var newScript = new Model.script(script);

		newScript.save(function(err){
			if(err) {
				console.log('error', err); 
			}
			console.log("Script Added!", newScript); 
			res.send(newScript); 
		})
	},

	getScripts: function(scriptName, res) {
		Model.script.findOne({'name':scriptName},function (err, found) {
			if(err){
				console.log('error in fetching tasks'); 
			}
			console.log(found);
			res.send(found); 
		});
	}








}

module.exports = dbFunc; 