import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-4'>
    <ul className='flex text-3xl font-bold justify-center'>
    <Link href='/' className='px-10 border-none'>Home</Link>
    <Link href='/News' className='px-10 border-none'>News</Link>
    </ul>
    </div>
  )
}

export default Navbar