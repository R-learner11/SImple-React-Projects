import Editorspick from '../Rightsidecomponents/Editorspick'
import Midcontent from '../Content/midcontent'
import PopularFaces from '../Popularfaces/PopularFaces'
import Mustreadarticles from '../Mustreadarticles/Mustreadarticles'
import Newsofweek from '../Newsoftheweek/Newsofweek'
import Advertisement from '../Advertisement/Advertisement'
import Livesection from '../Rightsidecomponents/Livesection'

function Home() {
  return (
    <>
        <div className='w-full flex mt-3'>
            <div className='flex-1 lg:mr-4 mr-3'>
                <Midcontent />
            </div>

            <div className='flex-initial flex-col w-[120px] lg:w-[213px] float-right lg:right-0 mobile:right-0'>
                <Editorspick/>
                <div className='hidden mobile:flex'>
                    <img src="./images/image101.png/" alt="sale picture"/>
                </div>
                <Livesection />
            </div>
        </div> 
        <div>
            <Advertisement />
            <Newsofweek/>
            <Mustreadarticles />
            <PopularFaces/>
        </div> 
    </>
  )
}

export default Home