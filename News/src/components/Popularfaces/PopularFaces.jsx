import React from 'react'
import { NavLink } from 'react-router-dom'

function PopularFaces() {
  return (
    <>
        <div className='w-full mt-3 pr-2'>
            <div className='justify-between flex text-xs font-bold lg:text-lg px-1 mb-3'>
                <span>Popular Faces</span>
                <NavLink
                className='sm:mx-0 mx-auto ' 
                        to="/popularfaces" 
                    >
                        View All
                    </NavLink> 
            </div>
            <div className='flex gap-2'>
                <div className=''>
                    <img src="./images/abc5.png" alt="" />
                    <p className='font-bold text-xs'>Ariana Grande</p>
                </div>
            
                <div className='sm:grid grid-flow-col gap-2 hidden'>
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
            
        </div>
    </>
  )
}

export default PopularFaces