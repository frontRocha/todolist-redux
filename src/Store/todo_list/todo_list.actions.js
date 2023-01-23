export function addTodoList(task) {
    return {
        type: 'HANDLE_ADD_TODO',
        payload: task,
    }
}

export function removeTodoList(id) {
    return {
        type: 'REMOVE_TODO',
        payload: id,
    }
}

export function toggleCompleteTask(id) {
    return {
        type: 'TOGGLE_COMPLET_TASK',
        payload: id,
    }
}