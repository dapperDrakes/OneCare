var Model = require('./db.js');
var jwt  = require('jwt-simple');
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

	getScripts: function(scriptName, user, res) {
		Model.script.findOne({'name':scriptName},function (err, found) {
			if(err){
				console.log('error in fetching tasks'); 
			}
			console.log(found);
			res.send(found); 
		});
	},

/* AUTHENTICATION FUNCTIONS */

	signup: function(newUser, res, next) {
		Model.user.find({"username": newUser.username}, function(err, user){
			if(err) {
				console.log("Error: ", error);
			}
			if(!user.length) { //if a user is not found, an empty array is returned
				console.log("user does NOT already exist");
				var user = new Model.user(newUser);
				user.save(function(err){
					if(err) {
						console.log("new user not saved", err);
					}
				console.log("new user saved");
				var token = jwt.encode(user, 'secret'); //create new token
        res.json({"token": token, "user": {"id": user._id, "username": user.username}}); //send new token and user object
			})

			}
			else {
				console.log("user already exists: ", user);
				next(new Error("user already exists"));
			}
		})
	},

	signin: function(reqUser, res, next){
		Model.user.find({"username": reqUser.username}, function(err, user){
			if(err){ //if error in query
				next("Error: ", error);
			}
			if(!user.length){ //if user not found
				next(new Error("username does not exist"));
			}
			else{ //if user found
				console.log("*** this is the user", user)
				user.comparePassword(reqUser.password, function(err, isMatch){
					if(err) {throw err;}
					if(!isMatch){
						next(new Error("Incorrect password")) //will send an error if incorrect password
					}
					else{
						console.log("password correct!");
						var token = jwt.encode(user[0], 'secret'); //create new token
            res.json({"token": token, "user": {"id": user[0]._id, "username": user[0].username}}); //send new token and user object
					}
				})
			}
		})
	},

	checkAuth: function(req, res, next){
		var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    }
    else {
      var user = jwt.decode(token, 'secret');
      console.log("Decoded user:", user);
      Model.user.find(user, function(err, user){
      	if(err){
      		next("Error: ", error);
      	}
      	if(!user.length){ //user not found
      		res.status(401).send();
      	}
      	else{ //token decoded and user found in database
      		console.log("user authenticated")
      		res.status(200).send();
      	}
      });
    }
	}






}

module.exports = dbFunc; 