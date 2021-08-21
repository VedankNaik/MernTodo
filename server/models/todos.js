import mongoose from "mongoose";
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema);
export default Todo;
