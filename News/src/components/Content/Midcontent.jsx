import React from "react"
import jsonData from "../../data/newsData.json"
import { v4 as uuidv4 } from 'uuid';


function Midcontent() {
  const newsData = jsonData
  const newsList1 = newsData.slice(2, 6)

  const firstNews = newsData[0]
  const secondNews = newsData[1]
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <div className="md:flex-row flex flex-col flex-auto">
          <div className="md:order-1 justify-center flex-shrink">
            <img className="w-full h-full" src={firstNews.urlToImage} alt="" />
          </div>
          <div className="flex md:flex-none md:w-[35%] flex-col justify-left px-2 py-2">
            <p className="font-bold text-xs lg:font-bold lg:text-lg">
              {firstNews.title}
            </p>
            <p className="text-left text-xs font-normal md:leading-[14.52px] row-span-2 mt-3">
              {firstNews.description} <br /> {firstNews.content}
            </p>
          </div>
        </div>
      </div>

<div className="flex 2xl:flex-row flex-col w-full">
        <div className="flex flex-col md:flex-row 2xl:flex-col">
          <div className=" justify-center flex-shrink">
            <img className="w-full h-full" src={secondNews.urlToImage} alt="" />
          </div>
          <div className="flex md:flex-none md:w-[35%] 2xl:w-full flex-col justify-left px-2 py-2">
            <p className="font-bold text-xs lg:font-bold lg:text-lg">
              {secondNews.title}
            </p>
            <p className="text-left text-xs font-normal md:leading-[14.52px] row-span-2 mt-3">
              {secondNews.description} <br /> {secondNews.content}
            </p>
          </div>
        </div>

        <div className="xl:w-full md:grid md:grid-cols-2 md:grid-rows-2">
          {newsList1 && newsList1.map((item) => {
            return (
              <div key={uuidv4()} className="px-2 py-2 w-fit h-fit">
                <div className=" justify-center flex-shrink">
                  <img className="w-full h-full" src={item.urlToImage} alt="" />
                </div>
                <div className="flex md:flex-none flex-col justify-left px-2 py-2">
                  <p className="font-bold text-xs lg:font-bold lg:text-lg">
                    {item.title}
                  </p>
                  <p className="text-left text-xs font-normal md:leading-[14.52px] row-span-2 mt-3 lg:line-clamp-3">
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

export default Midcontent
