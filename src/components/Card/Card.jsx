"use client"

import React from "react"
import AddTodo from "../AddTodo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "../SingleTodo/SingleTodo";
import Button from "../Button/Button";
import { todoCleared } from "../../store/features/todo/todoSlice";
import UpdateTodo from "../UpdateTodo/UpdateTodo";


const Card = () => {

const myTodoState = useSelector((state) => state.todos.todos)
const myToggleForm = useSelector((state) => state.todos.toggleForm)
console.log(myTodoState)
const dispatch = useDispatch();



    return(
        <div className="Card p-8 justify-center bg-indigo-100 w-1/2 mx-auto h-3/4">
        {myToggleForm ? <AddTodo /> : <UpdateTodo />}
        
        
        <ul>
        {myTodoState.map((todo) => {
            return(
                <li key={todo.id}><SingleTodo title={todo.name} id={todo.id}/></li>
            )
        })}
        </ul>
        <div className="flex justify-center">
        <Button handleClick={() => dispatch(todoCleared())} title={'Clear'} type={'secondary'}/>
        </div>
        </div>
    )
}
export default Card;