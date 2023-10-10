import express from "express";

import connectDb from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
const app = express();

// connect to database
const db_url = "mongodb://127.0.0.1:27017";
connectDb(db_url);

// use user route here
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("hello learners");
});

const port = 8000;

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
