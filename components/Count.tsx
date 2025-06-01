"use client"

import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]= useState(0)
  return (
    <div>
        <h1 className='text-2xl'>Count {count}</h1>
        <button className='ring ring-blue-500 py-2 px-4 rounded-full my-3' onClick={()=>setCount(count+1)}>Incress</button>
    </div>
  )
}

export default Count