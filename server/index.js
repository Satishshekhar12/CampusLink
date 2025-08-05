import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

// Load environment variables
dotenv.config();

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies and make them available in req.body

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("✅ MongoDB connected successfully"))
	.catch((error) => console.error("❌ MongoDB connection error:", error));

app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Welcome to the CampusLink API",
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
