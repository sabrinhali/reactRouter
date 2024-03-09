import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
<>

<div className='bg-violet-500 w-[100%] h-[90px] flex justify-between py-5 px-10'>
<h1 className='text-4xl'>Sabrin</h1>
<div className='flex gap-16 text-3xl'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About us</NavLink>
    <NavLink to ="/service">Service</NavLink>
    <NavLink to = "blog">Blog</NavLink>
</div>

</div>



</>
  )
}
