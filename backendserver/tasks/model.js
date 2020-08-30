import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		default: 'New Task',
	},
	owner: {
		type: mongoose.Schema.ObjectId,
		required: true,
	},
});

export default mongoose.model('Task', TaskSchema);
