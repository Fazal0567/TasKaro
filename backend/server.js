import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import { connectDB } from "./config/db.js";
import taskRouter from "./routes/taskRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// ✅ CORS CONFIGURATION
const corsOptions = {
	origin: process.env.CLIENT_URL || "http://localhost:3000", // frontend domain
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
	optionsSuccessStatus: 200,
};

// MIDDLEWARE
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB CONNECT
connectDB();

// ROUTES
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.get("/", (req, res) => {
	res.send("API WORKING");
});

// START SERVER
app.listen(port, () => {
	console.log(`🚀 Server started on http://localhost:${port}`);
});
