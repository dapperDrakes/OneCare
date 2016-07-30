var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

mongoose.connect('mongodb://onecare:onecare1>@ds031925.mlab.com:31925/onecare'); 

// USER SCHEMA 

var scriptSchema = new Schema({
	name: String, // name of drug
	dosage: String, // dosage ex. 30mg
	frequency: Number, // number of times in day,week,etc.
	recur: String, // this refers to whether: daily,weekly, monthly 
	refill: Date, // date of refill 
	refillRemind: Number, //reminder for refill 
	dailyRemind: Number, //reminder for doses 
	User: {type: Schema.Types.ObjectId, ref: 'User'}
	// refers to a specific user 
}); 

var userSchema = new Schema({
	username: String,
	password: String, 
	scripts: [{type: Schema.Types.ObjectId, ref: 'Script'}] // script models for user
});

var doctorSchema = new Schema({
	name: String, 
	field: String,
	address: String, 
	patients: [{type: Schema.Types.ObjectId, ref: 'User'}]
}); 


var Script = mongoose.model('Script', scriptSchema);
var User = mongoose.model('User', userSchema);
var Doctor = mongoose.model('Doctor', doctorSchema); 

module.exports = {user: User, script: Script, doctor: Doctor}; 