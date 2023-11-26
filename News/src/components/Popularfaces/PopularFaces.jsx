import React from 'react'
import { NavLink } from 'react-router-dom'
import jsonData from '../../data/Ads.json'
import { v4 as uuidv4 } from 'uuid';

function PopularFaces() {
    const popFaces = jsonData.slice(0, 5)
  return (
    <>
        <div className='w-full mt-3'>
            <div className='justify-between flex text-xs font-bold lg:text-lg px-1 mb-3'>
                <span>Popular Faces</span>
                <NavLink
                className='sm:mr-3 mx-auto' 
                        to="/popularfaces" 
                    >
                        View All
                    </NavLink> 
            </div>

            <div className="w-full">
        <div className="grid xl:grid-flow-col xl:grid-cols-5 sm:grid-cols-3 grid-cols-2">
          {popFaces && popFaces.map((item) => {
            return (
              <div key={uuidv4()} className="px-2 py-2 w-fit h-fit">
                <div className=" justify-center flex-shrink">
                  <img className="w-full h-full" src={item.urlToImage} alt="" />
                </div>
                
                
              </div>
              
            )
          })}
        </div>
        </div>
            
            </div>
            
        
    </>
  )
}

export default PopularFaces