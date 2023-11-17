import React from 'react'
import { useState } from 'react'

function Countrynav() {
    const [open, setIsOpen] = useState(false)
  return (
    <>
        <div className=' w-full h-77px '>
        <div className="sm:flex justify-between text-xs font-normal">
            <div className='flex gap-7 sm:gap-2 sm:justify-between mr-3 sm:order-1'>
                <button>
                    <svg 
                    onClick={()=>{
                        setIsOpen(!open)
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="sm:hidden mt-[10px] w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>

                <input
                    size="6"
                    className={`rounded-md border border-black/30 bg-transparent px-2 py-1 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                    type="text"
                    placeholder="Local News"
                />
                <button>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" 
                    className="w-6 h-6 mt-[10px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>

                <button> <img src="/images/location.png" alt="location" className='w-5 h-5 mt-[10px]' /> </button>
            </div>
            <div className={`${open?'':' hidden'} sm:justify-between items-center sm:flex sm:w-auto mt-2`}>
                <ul className='sticky flex flex-col font-normal text-xs sm:flex-row sm:gap-3 sm:text-center md:gap-5 w-fit'>
                    <li>
                        Asia
                    </li>
                    <li>
                        America
                    </li>
                    <li>
                        Latin America
                    </li>
                    <li>
                        Australia
                    </li>
                    <li>
                        Africa
                    </li>
                    <li>
                        Europe
                    </li>
                    <li>
                        Middle East
                    </li>
                </ul>
            </div>    
        </div>
        </div>
    </>
  )
}

export default Countrynav