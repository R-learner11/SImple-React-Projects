import Editorspick from "../Rightsidecomponents/Editorspick"
import Midcontent from "../Content/Midcontent"
import PopularFaces from "../Popularfaces/PopularFaces"
import Mustreadarticles from "../Mustreadarticles/Mustreadarticles"
import Newsofweek from "../Newsoftheweek/Newsofweek"
import Advertisement from "../Advertisement/Advertisement"
import Livesection from "../Rightsidecomponents/Livesection"
import MoreNews from "../Content/MoreNews"

function Home() {
  return (
    <>
      <div className=" py-1">
        <div className="w-full flex md:flex-row flex-col">
          <div className="flex-col flex-1 lg:mr-4 mr-3">
            <Midcontent />
          </div>

          <div className="bg-white gap-4 flex md:flex-initial flex-col w-[80%] md:w-[120px] lg:w-[213px]  lg:right-0">
            <Editorspick />
            <div className="">
              <img src="./images/image101.png/" alt="sale picture" />
            </div>
            <Livesection />
          </div>
        </div>
        <div className="">
            <MoreNews/>
          <Advertisement />
          <Newsofweek />
          <Mustreadarticles />
          <PopularFaces />
        </div>
      </div>
    </>
  )
}

export default Home
