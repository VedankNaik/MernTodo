import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todosRoute from "./routes/todos.js"
const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/todos', todosRoute);
const mongodb =
  "mongodb+srv://user1:qawsedrf@cluster0.wtf9b.mongodb.net/todo-db?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Welcome");
});
const PORT = process.env.PORT || 3000;
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
