import React from 'react'
import {NavLink, useSearchParams} from 'react-router-dom'
import jsonData from '../../data/editorspickdata.json'


function Editorspick() {
    
    const editorsPickData = jsonData['articles'].slice(0,3)

  return (
    <>
    <div className='right-0 flex-col'>
        <div className=''>
            <div className='justify-between content-center mobile:gap-2 md:flex flex-col'>
                <span className='font-bold text-base leading-5'>Editor's pick</span>
                <li className='list-none'>
                    <NavLink
                        to="/editorspick"
                        className={
                            `text-xs font-bold block py-2 pr-4 pl-3 duration-200 lg:p-0`
                        } 
                    >
                        View All
                    </NavLink>
                </li>

            </div>

            <div className='h-100 w-200 border-l-2 border-red-200 '>
                <ul>
                    {editorsPickData.map((item)=>{
                        return(
                            <li
                            className='px-1 py-3 font-semibold text-xs'
                             key={item.title}>
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