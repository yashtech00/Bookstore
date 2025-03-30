import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./models/db.js";
import AuthRouter from "./routers/AuthRoute.js";
import BookRouter from "./routers/BookRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
const PORT = process.env.PORT || 8000;

app.use("/user", AuthRouter);
app.use("/book",BookRouter)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
