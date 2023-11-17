import React from 'react'
import { useState } from 'react'


function Topheader() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <div className='lg:w-[120px]'>
                    <img
                        src="/images/image103.png"
                        alt="Logo"
                        className='w-[148px] h-[39px]'
                    />
                    
                </div>


                <div className='flex gap-2 lg:order-2'>
                    <svg
                        onClick={()=>{
                            setIsOpen(!isOpen)
                        }}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:hidden w-8 h-8"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <div className='flex'>
                            <input
                                size="6"
                                className={`hidden mobile:flex rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                                type="text"
                                placeholder="Search"
                            />
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className="w-6 h-6 mx-auto my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                
                        {/* sign in */}
                        <div className='flex content-center space-x-1 mx-auto my-auto'>
                            <img src="/images/Vector.png" alt="avatar" className='h-6 w-6'/>
                            <p className='hidden mobile:flex text-center font-medium text-sm'>Sign In</p>
                        </div>
                </div>

                <div className={`${isOpen?' transition ease-in-out delay-150':' hidden'} lg:sticky justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
                    <ul className='sticky z-50 flex flex-col mt-4 font-medium text-xs lg:flex-row lg:space-x-4 lg:mt-0 mobile:gap-5 mobile:mx-3 mobile:min-h-fit w-fit'>
                        <li className='   cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            Home
                        </li>
                        <li  className='  cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            World
                        </li>
                        <li className='  cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            Country
                        </li>
                        <li className='  cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            Language
                        </li>
                        <li className='  cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            Favourite
                        </li>
                        <li className='  cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            Calendar
                        </li>
                        <li className='  cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            private
                        </li>
                        <li className='flex cursor-pointer hover:underline decoration-red-600 decoration-4'>
                            More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Topheader