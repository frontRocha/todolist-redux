import { legacy_createStore, combineReducers } from 'redux'
import todo_listReducer from './todo_list/todo_list.reducer'

const rootReducer = combineReducers({
    todo: todo_listReducer
})

const store = legacy_createStore(rootReducer)

export default store