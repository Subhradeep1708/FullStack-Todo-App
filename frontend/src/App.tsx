import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import ThemeChanger from './components/ThemeChanger'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { CirclePlus } from 'lucide-react'


function App() {
    const [todos, setTodos] = useState([])
    const [selectedTodo, setSelectedTodo] = useState(null)
    const onSubmit = () => {
        console.log('Submitted')
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/api/v1/todos/')
            console.log(response)
            if (response.data?.success) {
                setTodos(response.data.data)

            }
        }
        fetchData()
    }, [onSubmit])

    return (

        <>
            <Navbar />

            <div className='grid grid-cols-3 gap-4 p-4 place-content-center '>
                <div className='space-y-4'>
                    {todos.map((todo: any, index: number) => {
                        if (index % 3 == 0) {
                            return <Card key={todo._id} todo={todo} setSelectedTodo={selectedTodo} />
                        }

                    })}
                </div>
                <div className='space-y-4'>
                    {todos.map((todo: any, index: number) => {
                        if (index % 3 == 1) {
                            return <Card key={todo._id} todo={todo} setSelectedTodo={selectedTodo} />
                        }

                    })}
                </div>
                <div className='space-y-4'>
                    {todos.map((todo: any, index: number) => {
                        if (index % 3 == 2) {
                            return <Card key={todo._id} todo={todo} setSelectedTodo={selectedTodo} />
                        }

                    })}
                </div>


                <button className="btn btn-accent w-16 h-16 rounded-full aspect-square fixed bottom-6 right-6" onClick={() => document!.getElementById('my_modal_3')!.showModal()}>
                    <CirclePlus className='text-white' size={30} /></button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <TodoForm onSubmit={onSubmit} todo={selectedTodo} />
                    </div>
                </dialog>


            </div>
        </>

    )
}

export default App
