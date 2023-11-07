import React from 'react'

function Navigation({name}) {
  return (
    <>
    <div className='h-20 flex bg-pink'>
    <div className='h-10 w-20 ml-16 mr-10 py-9'>
        <span className="font-extrabold text-2xl text-yellow-300 ">{name.toUpperCase()}</span>
    </div>
        <ul className='flex py-10 font-semibold text-white'>
            <div className='space-x-8 justify-center flex'>
                <li className='cursor-pointer group transition duration-300 '>Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span></li>
                <li className='cursor-pointer  group transition duration-300'>Chocolates
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                    </li>
                <li className='cursor-pointer  group transition duration-300'>Chocolate & Drinks
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                </li>
                <li className='cursor-pointer  group transition duration-300'>Sweets
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                </li>
                <li className='cursor-pointer  group transition duration-300'>Pages
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                </li>
                <li className='cursor-pointer  group transition duration-300'>About Us
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                </li>
            </div>
            <li className='h-10 w-10 cursor-pointer relative left-40'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Navigation