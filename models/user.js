var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	Name: {type: String, unique: true},
	Email: {type: String, unique: true},
	Password: String
});

module.exports = mongoose.model('myUsers', userSchema);