import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

// modules
import postRoute from "./routes/post.routes";

const app = express();

const PORT = process.env.PORT || 8000;

// basic middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// routes
app.use("/api/v1", postRoute);

// app listener
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
