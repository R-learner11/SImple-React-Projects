import React from "react"
import jsonData from "../../data/newsData.json"

function Midcontent() {
  const newsData = jsonData["articles"]
  return (
    <>
      <div className="w-full mb-2">
        <div className="grid md:grid-rows md:grid-flow-col md:gap-3 flex-col mt-2">
          <div className="row-span-2 col-span-2 md:order-1">
            <img
              className=""
              src="./images/image65.png"
              alt="news related image"
            />
          </div>
          <div className="row-span-2 col-span-1 flex-col justify-between">
            <span className="font-bold text-xs lg:font-bold lg:text-lg">
              {newsData[0].title}
            </span>
            <p className="text-left text-xs font-normal md:leading-[14.52px] row-span-2 mt-3">
              {newsData[0].description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-3">
        <div className="md:flex gap-3">
          <div>
            <img src="./images/Frame314.png" alt="" />
          </div>
          <div className="grid justify-center sm:grid-rows-2 sm:grid-flow-col gap-2">
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="sm:grid hidden sm:grid-flow-col sm:grid-row-3 gap-2">
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
            <div>
              <img src="./images/frame315.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Midcontent
