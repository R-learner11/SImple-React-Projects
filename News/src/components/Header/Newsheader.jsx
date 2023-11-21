import React from "react"
import { useState } from "react"

function Newsheader({ header }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="sticky w-full bg-[#222222] h-77px ">
        <div className="pl-3 sm:pl-[20px] lg:pl-[30px] pt-[10px] pb-[8px]">
          <div className="font-bold text-[32px] leading-9 flex justify-between mr-4">
            <p className="text-white">News: {header}</p>
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
          </div>

          <div className="flex lg:order-2">
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

          <div
            className={`text-white ${
              isOpen ? "" : "hidden"
            } lg:flex mt-2 lg:sticky items-center w-full font-extralight text-[14px] lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col lg:flex-row justify-between mobile:gap-2 mobile:min-h-fit xl:space-x-6">
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1 ">
                Home
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Politics
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                business
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Technology
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Science
              </li>
              <li className="hover:underline cursor-pointer border-r-[1px] border-white decoration-white decoration-2 pr-1">
                Health
              </li>
              <li className="hover:underline cursor-pointer border-r-[1px] border-white decoration-white decoration-2 pr-1">
                Arts
              </li>

              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Tourism
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Education
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Families
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Social
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Entertainment
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Weather
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                Magazine
              </li>
              <li className="border-r-[1px] border-white hover:underline cursor-pointer decoration-white decoration-2 pr-1">
                stories
              </li>
              <li className=" flex hover:underline cursor-pointer decoration-white decoration-2 pr-1">
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
