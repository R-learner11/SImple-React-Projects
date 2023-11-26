import React from 'react'
import jsonData from "../../data/newsData.json"
import { v4 as uuidv4 } from 'uuid';

function MoreNews() {
    const newsList2 = jsonData.slice(7, 12)
  return (
    <>
    <div className="w-full">
      
        <div className="grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-1 md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3">
          {newsList2 && newsList2.map((item) => {
            return (
              <div key={uuidv4()} className="px-2 py-2 w-fit h-fit">
                <div className=" justify-center flex-shrink">
                  <img className="w-full h-full" src={item.urlToImage} alt="" />
                </div>
                <div className="flex md:flex-none flex-col justify-left px-2 py-2">
                  <p className="font-bold text-xs lg:font-bold lg:text-lg line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-left hidden sm:flex text-xs font-normal md:leading-[14.52px] row-span-2 mt-3">
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

export default MoreNews