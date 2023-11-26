import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import 'flowbite'

function Navigation() {
  const [open, setIsOpen] = useState(false)
  return (
    <>
    <div className={`flex-col  left-0 bg-white ${open?'bg-white top-14 fixed':''} sm:w-auto w-0`}>
        <div className="">
        <button
          onClick={() => {
            setIsOpen(!open)
          }}
          type="button"
          className={`bg-white  fixed inline-flex items-center p-2 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600`}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        </div>

        
        <aside
          className={`${
            open ? "left-0 bg-white mt-[32px]" : "-translate-x-full left-[-100px]"
          } top-0 z-40 w-[100px] md:w-[120px] lg:w-[160px] h-screen transition-transform  sm:translate-x-0 " tabIndex="-1" aria-label="Sidebar`}
        >
          
          <div className="flex justify-center h-screen text-gray-700 ">
            <div className="flex flex-col">
            
              <ul className="text-xs font-medium">
                <NavLink to="/">
                  <li className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600">
                    Home
                  </li>
                </NavLink>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  News
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Business
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Job
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Services
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Holiday
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Hotel
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Restaurant
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Politics
                </li>
                <hr />
                <li
                  className="cursor-pointer px-3 py-2 rounded-sm hover:bg-gray-300 hover:border-r-[3px] hover:border-red-600"
                  href="#"
                >
                  Entertainment
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </aside>
        </div>
    </>
  )
}

export default Navigation