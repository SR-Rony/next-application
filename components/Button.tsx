'use client'

import React from 'react'

const Button = ({onClick,text,className}) => {
  return (
    <button onClick={onClick} className={className}>{text}</button>
  )
}

export default Button