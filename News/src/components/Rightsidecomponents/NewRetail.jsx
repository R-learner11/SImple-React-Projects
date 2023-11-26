import React from 'react'
import jsonData from '../../data/editorspickdata.json'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function NewRetail() {
    const editorsPickData = jsonData.slice(0,3)
  return (
    <>
        <div className='h-auto flex-col'>
        <div className=''>
            <div className='justify-between content-center mobile:gap-2 md:flex'>
                <span className='font-bold text-base leading-5'>New Retail</span>
                <li className='list-none'>
                    <NavLink
                        to="/"
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

export default NewRetail