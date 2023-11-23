import React from "react"
import { useState } from "react"

function Newsheader({ header }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="sticky w-full bg-[#222222] ">
        <div className="pl-3 sm:pl-[20px] lg:pl-[20px] pt-[10px] pb-[8px]">
          <div className="font-bold text-[32px] leading-9 flex justify-between mr-4">
            <p className="text-white">News: {header}</p>

            <div className="flex">
              <select
                className="sm:w-[100px] w-[20px] h-[30px] text-center text-xs mr-3 md:mr-[30px] mt-2 font-extralight rounded-lg"
                name=""
                id=""
              >
                <option className="w-auto rounded-full bg-slate-400" value="">
                  English
                </option>
                <option className="w-auto rounded-full bg-slate-400" value="">
                  Nepali
                </option>
              </select>

              <div className="flex lg:order-2 mt-2">
              <svg
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFFFFF"
                className=" lg:hidden w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              </div>
          </div>
          </div>

          

          <div
            className={` ${
              isOpen ? "h-full w-full pl-2 z-[1] top-0 left-0 transition-transform duration-150 overflow-y-auto" : "hidden"
            } text-white lg:flex mt-2 lg:sticky items-center w-full font-extralight text-[14px] lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col lg:flex-row justify-between mobile:min-h-fit mobile:space-y-2 xl:space-x-6 w-fit" >
              <li className="lg:border-r-[1px] lg:pr-2 lg:pl-0 px-2 mt-2 border-white hover:border-b-[3px] cursor-pointer  ">
                Home
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Politics
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                business
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Technology
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Science
              </li>
              <li className="hover:border-b-[3px] cursor-pointer lg:border-r-[1px] px-2 border-white ">
                Health
              </li>
              <li className="hover:border-b-[3px] cursor-pointer lg:border-r-[1px] px-2 border-white ">
                Arts
              </li>

              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Tourism
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Education
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Families
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Social
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Entertainment
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Weather
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                Magazine
              </li>
              <li className="lg:border-r-[1px] px-2 border-white hover:border-b-[3px] cursor-pointer ">
                stories
              </li>
              <li className=" flex hover:border-b-[3px] lg:pl-2 lg:pr-0 px-2 cursor-pointer ">
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Newsheader
