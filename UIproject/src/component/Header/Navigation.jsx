import React from 'react'
import { useState } from 'react'

function Navigation({name}) {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>

    <header className='shadow sticky z-50 top-0'>
        <nav className='bg-stone-700 text-white border-gray-200 px-4 lg:px-6 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <div>
                    <span className="font-extrabold text-2xl text-yellow-300 ">{name.toUpperCase()}</span>
                </div>
                <div className='flex items-center gap-6 lg:order-2'>
                    <svg
                    onClick={()=>{
                        setIsOpen(!isOpen)
                    }}
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:hidden w-8 h-8"
                     >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                </div>
                <div className={`${isOpen?'':'transition-all duration-500 ease-in hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 `}>
                    <ul className={`sticky z-50 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 mobile:gap-5 mobile:mx-3 mobile:min-h-fit w-fit  `}>
                        <li className='cursor-pointer group transition duration-300 w-fit'>Home
                        <span className="block max-w-0 group-hover:max-w-xs transition-all duration-400 h-0.5 bg-yellow-600"></span></li>
                        <li className='cursor-pointer  group transition duration-300 w-fit'>Chocolates
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                            </li>
                        <li className='cursor-pointer group transition duration-300 w-fit'>Chocolate & Drinks
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                        </li>
                        <li className='cursor-pointer  group transition duration-300 w-fit'>Sweets
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                        </li>
                        <li className='cursor-pointer  group transition duration-300 w-fit'>Pages
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                        </li>
                        <li className='cursor-pointer  group transition duration-300 w-fit'>About Us
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-600"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    </>
  )
}

export default Navigation