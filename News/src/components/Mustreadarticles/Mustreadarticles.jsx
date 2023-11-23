import React from "react"
import { NavLink } from "react-router-dom"

function Mustreadarticles() {
  return (
    <>
      <div className="w-full mt-3">
        <div className="justify-between flex text-xs font-bold lg:text-lg px-1 mb-3">
          <span>Must Read Articles</span>
          <NavLink className="sm:mr-3 mx-auto " to="/mustread">
            View All
          </NavLink>
        </div>

        <div className="md:flex mobile:pr-2 gap-2">
          <div className="flex-col">
            <img src="./images/abc3.png" alt="" />
            <span className="text-xs font-bold">
              Province 2 named Madhes Pradesh, Janakpur capital
            </span>
            
          </div>

          <div className="flex-col">
            <div className="grid md:grid-cols-3 md:grid-rows-2 grid-rows-3 grid-flow-col gap-1">
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
