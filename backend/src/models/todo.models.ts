import mongoose from "mongoose";

import { ITodo } from "../types/Todo";

const TodoSchema = new mongoose.Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;
