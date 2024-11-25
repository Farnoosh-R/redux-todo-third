"use client"

import React from "react"

const Button = ({handleClick, title, type, style}) => {
    return(
        <div className="Button">
        <button onClick={handleClick} className={type === 'primary' ? 'ml-2 bg-transparent hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded' : 'ml-2 bg-indigo-600 hover:bg-indigo-600 text-white font-bold py-2 px-4 border border-indigo-600 rounded'}>{title}</button>
        </div>
    )
}
export default Button;