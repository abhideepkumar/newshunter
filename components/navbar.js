import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  
  return (
    <div className='p-4'>
    <ul className='flex text-3xl font-bold justify-center font-serif'>
    <Link href='/' className='px-10'>Home</Link>
    </ul>
    </div>
  )
}

export default Navbar