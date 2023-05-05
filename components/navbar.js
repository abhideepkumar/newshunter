import React from 'react'
import Link from 'next/link'
const url="https://newsapi.org/v2/top-headlines?apiKey=70d953a5a90d4092b11bd270b65c7b69&sortBy=popularity&category=general";
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