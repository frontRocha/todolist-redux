import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MdDownloadDone } from "react-icons/md"
import { HiOutlineTrash } from "react-icons/hi"

import { removeTodoList, toggleCompleteTask } from "../../Store/todo_list/todo_list.actions"
import { setTodos } from "../../Store/todo_list/todo_list.selector"

import './Task.scss'

export function Task() {

    const todoList = useSelector(setTodos)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('@todoList:tasks', JSON.stringify(todoList))
    }, [todoList])

    const toggleCompletedTask = (id) => {
        dispatch(toggleCompleteTask(id))
    }

    const removeTaskOfTodo = (id) => {
        dispatch(removeTodoList(id))
    }

    return (
        todoList.map((item) => (
            <div key={item.id} className={`${item.checked && "completed"} task`}>
                <h1 className={`${item.checked && "completed"} `}>{item.name[0].toUpperCase() + item.name.substring(1)}</h1>
                <div className="options">
                    <button className={`${item.checked ? "completed" : ""} complet`} onClick={() => toggleCompletedTask(item.id)}><MdDownloadDone /></button>
                    <button className="delete" onClick={() => removeTaskOfTodo(item.id)}><HiOutlineTrash /></button>
                </div>
            </div>
        ))
    )
}