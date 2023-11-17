import React from 'react'
import Navigation from '../Sidenavigation/Navigation'
import Countrynav from '../Header/Countrynav'
import Editorspick from '../Rightsidecomponents/Editorspick'
import Livesection from '../Rightsidecomponents/Livesection'


function Maincontent() {
  return (
    <>
    <div className=' flex lg:mr-6'>
        <div>
            <Navigation />
        </div>
        
        <div className='w-full'>
        <div className='w-full left-0'>
            <Countrynav />
        </div>

        {/* <offset component rakhxu so that ya paxi changes add garna milos yo chai sabai ma halxu k ma vane layout.jsx ma!!/> */}
        
        <div className='flex flex-col mt-3 float-right w-[120px] lg:w-[213px] mobile:right-0'>
            <Editorspick/>
            <div className='hidden mobile:flex'>
                <img src="./images/image101.png/" alt="sale picture"/>
            </div>
            <Livesection />
        </div>
        </div>
    </div>
    </>
  )
}

export default Maincontent