import Popularretail from "../Rightsidecomponents/Popularretail"
import NewRetail from "../Rightsidecomponents/NewRetail"
import { v4 as uuidv4 } from "uuid"
import jsonData from "../../data/editorspickdata.json"

function ViewEditorsPick() {
  const editorsPickData = jsonData
  return (
    <>
      <div className="w-full flex flex-col  sm:flex-row mt-3">
        <div className="flex-col w-full mr-3">
          {editorsPickData.map((item) => {
            return (
              <div key={uuidv4()} className=" grid-flow-col grid-cols-3 mb-3 lg:grid lg:grid-cols-4 lg:justify-between lg:grid-rows-1">
                <div className=" justify-center flex-shrink lg:col-span-2">
                  <img className="w-full h-full" src={item.urlToImage} alt="" />
                </div>
                <div className="lg:col-span-2 flex md:flex-none flex-col justify-left px-2 py-2">
                  <p className="font-bold text-xs lg:font-bold lg:text-lg">
                    {item.title}
                  </p>
                  <p className="text-left text-xs font-normal md:leading-[14.52px] row-span-2 mt-3 lg:line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="mr-3 md:my-auto text-center">
                  <button
                    type="button"
                    className=" rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read More
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-white gap-4 flex md:flex-initial flex-col w-[80%] sm:w-[120px] lg:w-[213px]  lg:right-0">
          <Popularretail />
          <div className="">
            <img src="./images/image101.png/" alt="sale picture" />
          </div>
          <NewRetail />
        </div>
      </div>
    </>
  )
}

export default ViewEditorsPick
