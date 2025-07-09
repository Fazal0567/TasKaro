import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: "",
	},
	priority: {
		type: String,
		enum: ["Low", "Medium", "High"],
		default: "low",
	},
	dueDate: {
		type: Date,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const taskModel = mongoose.models.task || mongoose.model("task", taskSchema);
export default taskModel;
