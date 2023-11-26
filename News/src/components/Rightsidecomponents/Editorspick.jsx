import React from 'react'
import {NavLink} from 'react-router-dom'
import jsonData from '../../data/editorspickdata.json'
import { v4 as uuidv4 } from 'uuid';

function Editorspick() {
    
    const editorsPickData = jsonData.slice(0,3)
  return (
    <>
    <div className='md:right-0 flex-col'>
        <div className=''>
            <div className='justify-between content-center mobile:gap-2 flex'>
                <span className='font-bold text-xs sm:text-base leading-5'>Editor's pick</span>
                <li className='list-none'>
                    <NavLink
                        to="/editorspick"
                        className={
                            `text-xs font-semibold sm:font-bold block duration-200 lg:p-0`
                        } 
                    >
                        View All
                    </NavLink>
                </li>

            </div>

            <div className='h-100 w-200 border-l-2 border-red-200 '>
                <ul>
                    {
                     editorsPickData && editorsPickData.map((item)=>{
                        return(
                            <li
                            className='px-1 md:py-3 py-1 font-semibold text-xs'
                            key={uuidv4()}>
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Editorspick