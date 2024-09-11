import express from "express";
import connectDB from "./Config/DbConnection.js";
import authRoutes from "./Routes/AuthRouter.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
