import React from "react"
import { NavLink } from "react-router-dom"

function Advertisement() {
  return (
    <>
      <div className="w-full mt-3">
        <div className="justify-between flex text-xs font-bold lg:text-lg px-1 mb-3">
          <span>Advertisement</span>
          <NavLink to="/ads" className="sm:mx-0 mx-auto ">
            View All
          </NavLink>
        </div>

        <div className="sm:flex gap-2 mobile:pr-2">
          <div className="mx-10 sm:mx-0">
            <img src="./images/Group317.png" alt="" />
          </div>
          <div className="hidden sm:flex">
            <img src="./images/Group317.png" alt="" />
          </div>
          <div className="hidden sm:flex">
            <img src="./images/Group317.png" alt="" />
          </div>
          <div className="hidden sm:flex">
            <img src="./images/Group317.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Advertisement
