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

// w-[92px] h-[42px] top-[17px] left-[17px] p-[10px] px-[20px] gap-[10px] rounded-tl-[5px] rounded-br-[0px] rounded-bl-[0px] rounded-tr-[0px] opacity-0 absolute