import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";


const Card = ({ todo, setSelectedTodo }) => {

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3000/api/v1/todos/${todo._id}`)
    }

    return (
        <div className="text-white bg-[url(/public/bg2.jpg)] bg-cover bg-center backdrop-blur-sm w-96 rounded-2xl overflow-hidden" >
            <div className="backdrop-blur-sm h-full w-full p-4 space-y-2.5">
                <div className="flex justify-between ">
                    <h2 className="font-bold text-lg">{todo.title}</h2>
                    <div className="flex gap-4 ">
                        <button className="cursor-pointer" onClick={() => setSelectedTodo(todo)}>
                            <Pencil size={18} />
                        </button>
                        <button className="cursor-pointer" onClick={handleDelete}>
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
                <p className="text-wrap break-words">{todo.description}</p>
                <div className="card-actions justify-end">
                    <input type="checkbox" className="checkbox checkbox-success" />
                </div>
            </div>

        </div>

    )
}

export default Card
