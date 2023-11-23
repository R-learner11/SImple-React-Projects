import React from 'react'
import { NavLink } from 'react-router-dom'

function PopularFaces() {
  return (
    <>
        <div className='w-full mt-3 pr-2'>
            <div className='justify-between flex text-xs font-bold lg:text-lg px-1 mb-3'>
                <span>Popular Faces</span>
                <NavLink
                className='sm:mr-3 mx-auto' 
                        to="/popularfaces" 
                    >
                        View All
                    </NavLink> 
            </div>
            <div className='sm:flex grid grid-cols-2 grid-rows-2 mobile:mx-auto mobile:pr-2 justify-between gap-2'>
                <div className=''>
                    <img src="./images/abc5.png" alt="" />
                    <p className='font-bold text-xs'>Ariana Grande</p>
                </div>
                    <div>
                        <img src="./images/abc5.png" alt="" />
                        <p className='font-bold text-xs'>Ariana Grande</p>
                    </div>
                    <div>
                        <img src="./images/abc5.png" alt="" />
                        <p className='font-bold text-xs'>Ariana Grande</p>
                    </div>
                    <div>
                        <img src="./images/abc5.png" alt="" />
                        <p className='font-bold text-xs'>Ariana Grande</p>
                    </div>
                    <div>
                        <img src="./images/abc5.png" alt="" />
                        <p className='font-bold text-xs'>Ariana Grande</p>
                    </div>
                </div>  
            </div>
            
        
    </>
  )
}

export default PopularFaces