import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { v4 } from "uuid"
import { ToastContainer } from 'react-toastify';

import Validator from "./Validator/Validator"
import { addTodoList } from "../../Store/todo_list/todo_list.actions"

import './Form.scss'

export function Form() {

    const [titleTask, setTitleTask] = useState('')
    const dispatch = useDispatch()

    const handleDataTask = async (e) => {
        e.preventDefault()
        const result = await Validator(titleTask)
        
        if(!result) {
            createTaskData()
        }
    }

    const createTaskData = () => {
        const id = v4()
        const task = {
            name: titleTask,
            checked: false,
            id: id,
        }

        addTaskOnTodoList(task)
    }

    const addTaskOnTodoList = (task) => {
        setTitleTask('')
        dispatch(addTodoList(task))
    }

    return (
        <form className="form">
            <ToastContainer />
            <input placeholder='Adicione uma tarefa aqui' value={titleTask} onChange={(e) => setTitleTask(e.target.value)} />
            <button onClick={handleDataTask}><AiOutlinePlus /> Adicionar</button>
        </form>
    )
}