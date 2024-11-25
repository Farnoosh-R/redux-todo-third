import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    todos:[
        {id: uuidv4(), name: 'wake up'},
        {id: uuidv4(), name: 'make coffee'},
        {id: uuidv4(), name: 'play tennis'}
    ],
    toggleForm: true,
    updateForm: {}
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        todoAdd: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        todoDeleted: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        todoCleared: (state) => {
            state.todos = []
        },
        todoToggle: (state, action) => {
            state.toggleForm = !state.toggleForm
            state.updateForm = {...state.updateForm, ...action.payload}
        },
        todoUpdated: (state, action) => {
            const updatedValue = state.todos.find((todo) => todo.id === action.payload.id)
            updatedValue.name = action.payload.name
            state.toggleForm = !state.toggleForm
        }
    }
})
export const {todoAdd, todoDeleted, todoCleared, todoToggle, todoUpdated} = todoSlice.actions;
export default todoSlice.reducer;