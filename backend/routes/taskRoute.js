import express from "express";
import {
	createTask,
	getTasks,
	getTaskById,
	updateTask,
	deleteTask,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/auth.js";

const taskRouter = express.Router();

taskRouter
	.route("/gp")
	.get(authMiddleware, getTasks)
	.post(authMiddleware, createTask);

taskRouter
	.route("/:id/gp")
	.get(authMiddleware, getTaskById)
	.put(authMiddleware, updateTask)
	.delete(authMiddleware, deleteTask);

export default taskRouter;
