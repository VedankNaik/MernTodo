import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todosRoutes from "./routes/todos.js";
const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/todos", todosRoutes);
const mongodb =
  "mongodb+srv://user1:qawsedrf@cluster0.wtf9b.mongodb.net/todo-db?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Welcome to server");
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected");
    app.listen(5000);
  })
  .catch((err) => console.log(err));
