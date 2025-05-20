import axios from "axios";
import { useState } from "react";

const TodoForm = ({ todo, onSubmit }: {
   todo?: null | {
      title: string;
      description: string;
      completed: boolean;
      _id: string
   };
   onSubmit: () => void;
}) => {
   const [title, setTitle] = useState(todo?.title || "");
   const [description, setDescription] = useState(todo?.description || "");

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (title.trim() === "") return;

      try {
         if (!todo) {
            await axios.post("http://localhost:3000/api/v1/todos/", { title, description });
         } else {
            // await axios.put(`http://localhost:3000/api/v1/todos/${todo.id}`, { title, description });
         }
         setTitle("");
         setDescription("");
         onSubmit();
      } catch (error: any) {
         console.error("Error:", error.response?.data || error.message);
      }
   };
   return (
      <div className="p-2">
         <form onSubmit={handleSubmit} className="p-4 flex flex-col max-w-xl gap-y-2 shadow-md rounded-2xl border-primary/50">
            <input
               type="text"
               placeholder="Title"
               onChange={(e) => setTitle(e.target.value)}
               value={title}
               className="input w-full"
            />
            <textarea

               placeholder="Description"
               onChange={(e) => setDescription(e.target.value)}
               value={description}
               className="input border-2 w-full textarea"
            />

            <button className="btn btn-accent" type="submit">{todo ? "Update Todo" : "Add Todo"}</button>
         </form>
      </div>
   );
};

export default TodoForm;
