import {
  deleteTodo,
  updateTodo,
  createTodo,
  getAllTodo,
  getTodo,
  toggleCompletedTodo,
} from "../services/Todo.services";
import { Request, Response } from "express";
import { ITodo } from "../types/Todo";

// Update a Todo
export const updateTodoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo: ITodo = req.body;
    const updatedTodo = await updateTodo(id, todo);
    res
      .status(200)
      .json({ data: updatedTodo, success: true, message: "Todo updated" });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Todo not updated",
    });
  }
};

// Create a Todo
export const createTodoController = async (req: Request, res: Response) => {
  try {
    const todo: ITodo = req.body;
    const newTodo = await createTodo(todo.title, todo.description);
    res
      .status(201)
      .json({ message: "Todo created", data: newTodo, success: true });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
      message: "Todo not created",
      success: false,
    });
  }
};

// Delete a Todo

export const deleteTodoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteTodo(id);
    res.status(204).json({ message: "Todo deleted", success: true });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
      message: "Todo not deleted",
      success: false,
    });
  }
};

// Get all Todos
export const getAllTodoController = async (req: Request, res: Response) => {
  try {
    const todos = await getAllTodo();
    if (todos.length === 0) {
      res
        .status(200)
        .json({ data: todos, success: true, message: "No Todos Found" });
    }
    res
      .status(200)
      .json({ data: todos, success: true, message: "All Todos fetched" });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message, success: false, message: "No Todos" });
  }
};

// Get a Todo

export const getATodoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await getTodo(id);
    res
      .status(200)
      .json({ data: todo, success: true, message: "Todo fetched" });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message, success: false, message: "No Todo" });
  }
};

// Toggle Completed Todo
export const toggleCompletedTodoController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const todo = await toggleCompletedTodo(id);
    res
      .status(200)
      .json({ data: todo, success: true, message: "Todo updated" });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Todo not updated",
    });
  }
};
