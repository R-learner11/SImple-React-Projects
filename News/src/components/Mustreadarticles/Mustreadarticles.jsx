import React from "react"
import { NavLink } from "react-router-dom"

function Mustreadarticles() {
  return (
    <>
      <div className="w-full mt-3">
        <div className="justify-between flex text-xs font-bold lg:text-lg px-1 mb-3">
          <span>Must Read Articles</span>
          <NavLink className="sm:mx-0 mx-auto " to="/mustread">
            View All
          </NavLink>
        </div>

        <div className="sm:flex mobile:pr-2 gap-2">
          <div className="flex-col">
            <img src="./images/abc3.png" alt="" />
            <span className="text-xs font-bold">
              Province 2 named Madhes Pradesh, Janakpur capital
            </span>
            <p className="text-xs font-normal">
              Province 2 named Madhes Pradesh, Janakpur capital
            </p>
          </div>

          <div className="flex-col">
            <div className="sm:grid grid-cols-3 grid-flow-col gap-1 hidden">
              <div>
                <img src="./images/abc4.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div>
                <img src="./images/abc4.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div>
                <img src="./images/abc4.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
            </div>

            <div className="sm:grid grid-cols-3 grid-flow-col gap-1 mt-2 hidden">
              <div>
                <img src="./images/abc4.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div>
                <img src="./images/abc4.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div>
                <img src="./images/abc4.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mustreadarticles