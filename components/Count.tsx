"use client"

import React, { useState } from 'react'
import Button from './Button'

const Count = () => {
    const [count,setCount]= useState(0)
  return (
    <div className='grid justify-center items-center h-80 grid-flow-row'>
        <div>
            <h1 className='text-2xl my-4 text-center font-bold'>Count {count}</h1>
            <Button onClick={()=>setCount(count+1)} className='py-1 px-5 ring rounded-md cursor-pointer bg-primary' text='Incress'/>
            <Button onClick={()=>setCount(count)} className='py-1 px-5 ring rounded-md cursor-pointer bg-primary' text='Reset'/>
            <Button onClick={()=>setCount(count-1)} className='py-1 px-5 ring rounded-md cursor-pointer bg-primary' text='Decress'/>
        </div>
    </div>
  )
}

export default Count