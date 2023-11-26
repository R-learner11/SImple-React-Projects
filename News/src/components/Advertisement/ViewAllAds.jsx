import React from 'react'
import Editorspick from '../Rightsidecomponents/Editorspick'
import Livesection from '../Rightsidecomponents/Livesection'
import { Link } from 'react-router-dom'
import jsonData from '../../data/Ads.json'
import { v4 as uuidv4 } from 'uuid';

function ViewAllAds() {
    const newsList2 = jsonData.slice(0, 5)
  return (
    <>
    <div className='w-full md:flex-row flex flex-col mt-3'>
    <div className="flex-col 2xl:px-7">
          {newsList2.map((item) => {
            return (
              <div key={uuidv4()} className="px-2 py-2">
                <div className=" justify-center flex-shrink lg:w-1/2 lg:mx-auto">
                  <img className="w-full h-full" src={item.urlToImage} alt="" />
                </div>
                
              </div>
              
            )
          })}
        </div>

        <div className='bg-white sm:flex sm:flex-initial flex-col md:w-[40%] float-right lg:right-0 mr-1 mobile:right-0'>
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

export default ViewAllAds