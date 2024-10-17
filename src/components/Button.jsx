import React from 'react'

function Button({text, onClick}) {
  return (
    <button
    onClick={onClick}
    className="bg-blue p-[10px] px-[20px] py-[20px] my-[2rem] mx-[15rem] rounded-[5px]">
        {text}
    </button>
  )
}

export default Button

