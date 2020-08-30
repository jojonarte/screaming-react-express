import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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

UserSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model('User', UserSchema);
