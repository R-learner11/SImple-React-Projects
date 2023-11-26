import React from "react"
import Editorspick from "../Rightsidecomponents/Editorspick"
import Livesection from "../Rightsidecomponents/Livesection"
import jsonData from "../../data/newsData.json"
import { v4 as uuidv4 } from 'uuid';
const newsList1 = jsonData.slice(0, 9)

function ViewMustReadArticles() {
  return (
    <>
      <div className='w-full md:flex-row flex flex-col mt-3'>
    <div className="flex-col 2xl:px-7">
          {newsList1.map((item) => {
            return (
              <div key={uuidv4()} className="px-2 py-2">
                <div className=" flex-shrink w-full lg:mx-auto">
                  <img className="w-full h-full" src={item.urlToImage} alt="" />
                </div>
                <div className="flex md:flex-none flex-col justify-left px-2 py-2">
                  <p className="font-bold text-xs lg:font-bold lg:text-lg ">
                    {item.title}
                  </p>
                  <p className="font-normal text-xs   ">
                    {item.description}
                  </p> <br />
                  <p className="font-normal text-xs l  ">
                    {item.content}
                  </p>
                </div>
                
              </div>
              
            )
          })}
        </div>

        <div className='bg-white sm:flex sm:flex-initial flex-col lg:w-[40%] float-right lg:right-0 mr-1 mobile:right-0'>
                <Editorspick/>
                <div className='hidden mobile:flex'>
                    <img src="./images/image101.png/" alt="sale picture"/>
                </div>
                <Livesection />
            </div>
      </div>
    </>
  )
}

export default ViewMustReadArticles
