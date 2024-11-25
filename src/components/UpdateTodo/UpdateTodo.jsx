"use client"

import React, { useState } from "react"
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { todoUpdated } from "../../store/features/todo/todoSlice";

const UpdateTodo = () => {


const dispatch = useDispatch()
const myUpdateTodo = useSelector((state) => state.todos.updateForm);
const [update, setUpdate] = useState(myUpdateTodo.name)

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
        todoUpdated({
            id: myUpdateTodo.id,
            name: update
        })
    )
}

    return(
        <div className="AddTodo block w-3/4 justify-center mx-auto mb-8">
        <form className="flex justify-center" onSubmit={handleSubmit}>
        <Input value={update} handleChange={(e) => setUpdate(e.target.value)} placeholder={'Edit todo'}/>
        <Button style={'ml-2'} type={'secondary'} title={'Edit'}/>
        </form>
        </div>
    )
}
export default UpdateTodo;