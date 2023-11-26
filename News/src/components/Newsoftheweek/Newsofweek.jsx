import React from "react"
import { NavLink } from "react-router-dom"
import jsonData from "../../data/newsData.json"
import { v4 as uuidv4 } from 'uuid';

function Newsofweek() {
  const mainNews = jsonData[0]
  const newsList1 = jsonData.slice(1, 9)
  return (
    <>
      <div className="justify-between flex text-xs font-bold lg:text-lg px-1 mb-3 mt-3">
        <span>News of The Week.</span>
        <NavLink className="sm:mr-3 mx-auto" to="/newsofweek">
          View All
        </NavLink>
      </div>

      <div className="flex xl:flex-row flex-col w-full gap-2">
        <div className="flex flex-col md:flex-row xl:flex-col ">
          <div className=" justify-center flex-shrink">
            <img className="w-full h-full" src={mainNews.urlToImage} alt="" />
          </div>
          <div className="flex md:flex-none md:w-[35%] xl:w-full flex-col justify-left px-2 py-2">
            <p className="font-bold text-xs lg:font-bold lg:text-lg">
              {mainNews.title}
            </p>
            <p className="text-left text-xs font-normal md:leading-[14.52px] row-span-2 mt-3">
              {mainNews.description} <br /> {mainNews.content}
            </p>
          </div>
        </div>

        <div className="xl:w-full grid grid-flow-col sm:grid-cols-4 sm:grid-rows-2 grid-cols-2 grid-rows-4 gap-2">
          {newsList1 && newsList1.map((item) => {
            return (
              <div key={uuidv4()} className=" w-fit h-fit">
                <div className=" justify-center flex-shrink">
                  <img className="w-full h-full" src={item.urlToImage} alt="" />
                </div>
                <div className="flex md:flex-none flex-col justify-left px-2 py-2">
                  <p className="font-bold text-xs lg:font-bold lg:text-lg line-clamp-1">
                    {item.title}
                  </p>
                  <p className="font-bold text-xs lg:font-normal line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
              
            )
          })}
        </div>
        </div>
    </>
  )
}

export default Newsofweek
