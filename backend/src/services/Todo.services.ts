import Todo from "../models/todo.models";
import { ITodo } from "../types/Todo";
import dbConnect from "../utils/dbConnect";

// Update a Todo
export const updateTodo = async (id: string, newTodo: ITodo) => {
  await dbConnect();
  const todo = await Todo.findByIdAndUpdate(
    id,
    {
      title: newTodo.title,
      description: newTodo.description,
      completed: newTodo.completed || false,
    },
    { new: true } // Ensures you get the updated document
  );
  return todo;
};

// Delete a Todo
export const deleteTodo = async (id: string) => {
  await dbConnect();
  await Todo.findByIdAndDelete(id);
};

// Create a new Todo
export const createTodo = async (title: string, description: string) => {
  await dbConnect();
  const todo = new Todo({
    title,
    description,
    completed: false,
  });

  await todo.save();
  return todo;
};

// Toggle completed status
export const toggleCompletedTodo = async (id: string) => {
  await dbConnect();
  const todo = await Todo.findById(id);
  if (!todo) return null;

  todo.completed = !todo.completed; // Toggle the completed state
  await todo.save();
  return todo;
};

export const getTodo = async (id: string) => {
  await dbConnect();
  const todo = await Todo.findById(id);
  return todo;
};

export const getAllTodo = async () => {
  await dbConnect();
  const todo = await Todo.find();
  return todo;
};
