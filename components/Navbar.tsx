import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div>
        <div className="container mx-auto">
            <div className='flex justify-between items-center '>
                <div><Link href='/'>SR Rony</Link></div>
                <div>
                    <ul className='flex items-center justify-center gap-5'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/product'>Product</Link></li>
                        <li><Link href='/doc'>Doc</Link></li>
                        <li><Link href='/counter'>Counter</Link></li>
                    </ul>
                </div>
                <div>
                    <Button className='py-2 px-5 ring rounded-md' text='login'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar