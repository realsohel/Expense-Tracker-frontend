import React from 'react'

const Button = ({name,icon,onClick,bg,bPad,color,bRad}) => {
    return (
        <button 
            style={{
                background: bg,
                padding: bPad,
                borderRadius: bRad,
                color: color,
            }}
            className={
                `outline-none border-none flex items-center gap-2 font-inherit fontSize-inherit cursor-pointer 
                transition-all duration-400 ease-in-out`
                }
            onClick={onClick}
            >
                {icon}
                {name}
        
        </button>
    )
}

export default Button
