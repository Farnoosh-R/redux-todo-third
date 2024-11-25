"use client"

import React from "react"

const Input = ({handleChange, placeholder, value}) => {
    return(
        <div className="Input">
        <input value={value} onChange={handleChange} placeholder={placeholder} className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
        </div>
    )
}
export default Input