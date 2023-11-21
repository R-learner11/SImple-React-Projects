import React from "react"
import Editorspick from "../Rightsidecomponents/Editorspick"
import Livesection from "../Rightsidecomponents/Livesection"
import { Link } from "react-router-dom"

function ViewNewsOfWeek() {
  return (
    <>
      <div className="w-full flex mt-3">
        <div className="md:mx-5 w-full flex-col">
          <div className="content-center text-center">
            <Link>
              <img
                className="w-full sm:w-[50%] mx-auto my-3 pr-2"
                src="./images/abc1.png"
                alt=""
              />
            </Link>
            <span className="text-xs font-normal text-center">
              This is the latest news of this week . Click it to check out.
            </span>
          </div>

          <div className="text-center">
            <Link>
              <img
                className="w-full sm:w-[50%] mx-auto my-3 pr-2"
                src="./images/abc1.png"
                alt=""
              />
            </Link>
            <span className="text-xs font-normal text-center">
              This is the latest news of this week . Click it to check out.
            </span>
          </div>

          <div className="text-center">
            <Link>
              <img
                className="w-full sm:w-[50%] mx-auto my-3 pr-2"
                src="./images/abc1.png"
                alt=""
              />
            </Link>
            <span className="text-xs font-normal text-center">
              This is the latest news of this week . Click it to check out.
            </span>
          </div>

          <div className="text-center">
            <Link>
              <img
                className="w-full sm:w-[50%] mx-auto my-3 pr-2"
                src="./images/abc1.png"
                alt=""
              />
            </Link>
            <span className="text-xs font-normal text-center">
              This is the latest news of this week . Click it to check out.
            </span>
          </div>

          <div className="text-center">
            <Link>
              <img
                className="w-full sm:w-[50%] mx-auto my-3 pr-2"
                src="./images/abc1.png"
                alt=""
              />
            </Link>
            <span className="text-xs font-normal text-center">
              This is the latest news of this week . Click it to check out.
            </span>
          </div>
        </div>

        <div className="flex-initial flex-col w-[120px] lg:w-[213px] float-right lg:right-0 mobile:right-0">
          <Editorspick />
          <div className="hidden mobile:flex">
            <img src="./images/image101.png/" alt="sale picture" />
          </div>
          <Livesection />
        </div>
      </div>
    </>
  )
}

export default ViewNewsOfWeek
