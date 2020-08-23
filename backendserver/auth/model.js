const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		minlength: 4,
		type: String,
		required: true,
		select: false,
	},
});

module.exports = mongoose.model('User', UserSchema);
