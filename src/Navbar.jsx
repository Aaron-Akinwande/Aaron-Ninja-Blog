import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className=" p-5 flex justify-between items-center max-w-xl m-auto border border-b-white ">
            <h1 className=' text-red-600 font-semibold text-2xl'>The Aaron Blog</h1>
            <div className="">
                <Link className='ml-4 p-2  hover:text-red-600' to="/">Home</Link>
                <Link className='ml-4 p-2   hover:text-red-600' to="/create">Create New Blog</Link>
            </div>
        </nav>
    </div>
  )
}
