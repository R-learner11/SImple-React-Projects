import React from "react"
import { NavLink } from "react-router-dom"

function Newsofweek() {
  return (
    <>
      <div className="w-full mt-4">
        <div className="justify-between flex text-xs font-bold lg:text-lg px-1 mb-3">
          <span>News of The Week.</span>
          <NavLink className="sm:mr-3 mx-auto  " to="/newsofweek">
            View All
          </NavLink>
        </div>

        <div className="md:grid md:grid-flow-col mobile:pr-2 gap-2 flex-col">
          <div className="flex-col">
            <img src="./images/abc.png" alt="" />
            <span className="text-xs font-bold">
              Province 2 named Madhes Pradesh, Janakpur capital
            </span>
            <p>some other contents related to this.</p>
          </div>


          <div className="lg:flex-col">
            <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2 grid-flow-col gap-2 my-auto mb-3">
              
              <div >
                <img src="./images/abc1.png" alt="" className=""/>
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div >
                <img src="./images/abc1.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div >
                <img src="./images/abc1.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div >
                <img src="./images/abc1.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2 grid-flow-col gap-2 my-auto">
              <div >
                <img src="./images/abc1.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div >
                <img src="./images/abc1.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div >
                <img src="./images/abc1.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
              <div >
                <img src="./images/abc1.png" alt="" />
                <p className="font-bold text-xs">Women In Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsofweek
