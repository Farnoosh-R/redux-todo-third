"use client"

import React, { useState } from "react"
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../store/features/todo/todoSlice";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {

const [title, setTitle] = useState();
const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
        todoAdd({
            id: uuidv4(),
            name: title
        })
    )
}

    return(
        <div className="AddTodo block w-3/4 justify-center mx-auto mb-8">
        <form className="flex justify-center" onSubmit={handleSubmit}>
        <Input handleChange={(e) => setTitle(e.target.value)} placeholder={'Add todo'}/>
        <Button style={'ml-2'} type={'primary'} title={'Add'}/>
        </form>
        </div>
    )
}
export default AddTodo;