import React from 'react'
import getNewsInfo from '../hooks/getNewsInfo'

function Livesection() {


    const newsInfo = getNewsInfo()
  const firstFourKeys = Object.keys(newsInfo).slice(0,4)

  return (
    <>
    <div className='h-auto flex-col'>
        <div>
            <div>
                <span className='font-bold text-base leading-5'>Live</span>
                
            </div>

            <div className='h-100 w-200 border-l-2 border-red-200'>
                <ul>
                    {firstFourKeys.map((item)=>{
                        return(
                            <li
                            className='px-1 md:py-3 py-1 font-semibold text-xs'
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

export default Livesection