import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import getNewsInfo from '../hooks/getNewsInfo'


function Editorspick() {
    const newsInfo = getNewsInfo()
  const firstFourKeys = Object.keys(newsInfo).slice(15,18)

  return (
    <>
    <div className='h-auto flex-col'>
        <div className=''>
            <div className='justify-between content-center mobile:gap-2 md:flex flex-col'>
                <span className='font-bold text-base leading-5'>Editor's pick</span>
                <li
                    // to="#"
                        className={
                            `font-semibold text-sm leading-4 list-none`
                        } 
                    >
                        View All
                </li>

            </div>

            <div className='h-100 w-200 border-l-2 border-red-200 '>
                <ul>
                    {firstFourKeys.map((item)=>{
                        return(
                            <li
                            className='px-1 py-4 font-semibold text-xs'
                             key={item}>
                                <a href={newsInfo[item].url}>
                                    {newsInfo[item].title}
                                </a>
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