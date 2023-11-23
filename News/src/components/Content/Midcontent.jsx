import React from "react"
import jsonData from "../../data/newsData.json"

function Midcontent() {
  const newsData = jsonData["articles"]
  const newsList = newsData.slice(1, 5)
  const newsList2 =newsData.slice(5,10)
  return (
    <>
      <div className="w-full mb-2 ">
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
          <div className="">
            <img className="mx-auto" src="./images/Frame314.png" alt="" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:flex-shrink">
            {newsList.map((item) => {
              return (
                <div key={item.title}>
                  <img className="mx-auto" src="./images/frame315.png" alt="" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-3">
          
          <div className="grid lg:grid-cols-5 grid-cols-2 grid-rows-2 items-center gap-2">
            {newsList2.map((item) => {
              return (
                <div key={item.title}>
                  <img className='mx-auto' src="./images/frame315.png" alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Midcontent
