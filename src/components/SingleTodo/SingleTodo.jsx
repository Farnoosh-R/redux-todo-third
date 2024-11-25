"use client"
import React, { useState } from "react"
import { FiEdit } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { BsFillTrash2Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { todoDeleted, todoToggle } from "../../store/features/todo/todoSlice";


const SingleTodo = ({title, id}) => {

const [done, setDone] = useState();
const dispatch = useDispatch()



    return(
        <div className="SingleTodo block flex justify-between bg-indigo-200 p-3 w-3/4 mx-auto mb-3">
        <h2 className={done ? 'font-bold line-through' : 'font-bold'}>{title}</h2>
        <div className="flex text-xl">
        <FaCircleCheck onClick={() => setDone(!done)} className="text-teal-500"/>
        <FiEdit onClick={() => dispatch(todoToggle({id: id, name: title}))} className="mx-3 text-sky-600"/>
        <BsFillTrash2Fill onClick={() => dispatch(todoDeleted(id))} className="text-pink-600"/>
        </div>
        </div>
    )
}
export default SingleTodo;