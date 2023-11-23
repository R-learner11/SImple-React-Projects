import React from "react"
import { NavLink } from "react-router-dom"

function Advertisement() {
  return (
    <>
      <div className="w-full mt-3 md:mr-2 ">
        <div className="justify-between flex text-xs font-bold lg:text-lg px-1 mb-3">
          <span className="">Advertisement</span>
          <NavLink to="/ads" className="sm:mr-3 mx-auto ">
            View All
          </NavLink>
        </div>

        <div className="sm:flex grid grid-cols-2 grid-rows-2 mobile:mx-auto mobile:pr-2 justify-between gap-1">
          <div className="mb-2">
            <img src="./images/Group317.png" alt="" />
          </div>
          <div className="mb-2">
            <img src="./images/Group317.png" alt="" />
          </div>
          <div className="mb-2">
            <img src="./images/Group317.png" alt="" />
          </div>
          <div className="mb-2">
            <img src="./images/Group317.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Advertisement
