import { Router } from "express";
import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getAllTodoController,
  getATodoController,
  updateTodoController,
} from "../controllers/Todo.controller";
import dbConnect from "../utils/dbConnect";

const todoRouter = express.Router();

// dbConnect();
todoRouter.get("/", getAllTodoController);
// todoRouter.get("/hello", (req, res) => {
//   res.json({ message: "Hello World" });
// });
todoRouter.post("/", createTodoController);
todoRouter.get("/:id", getATodoController);
todoRouter.put("/:id", updateTodoController);
todoRouter.delete("/:id", deleteTodoController);

export default todoRouter;
