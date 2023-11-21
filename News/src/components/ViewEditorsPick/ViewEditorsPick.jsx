import jsonData from "../../data/editorspickdata.json"
import Popularretail from "../Rightsidecomponents/Popularretail"
import NewRetail from "../Rightsidecomponents/NewRetail"

function ViewEditorsPick() {
  const editorsPickData = jsonData["articles"].slice(9, 18)
  return (
    <>
      <div className="w-full flex mt-3">
        <div className="flex-1 w-full">
          {editorsPickData.map((item) => {
            return (
              <div
                key={item.title}
                className="grid md:grid-flow-col md:gap-3 flex-col mt-2 justify-between gap-3"
              >
                <div className="row-span-1">
                  <img
                    className=""
                    src="./images/image65.png"
                    alt="news related image"
                  />
                </div>
                <div className="row-span-2 col-span-1 flex-col justify-between">
                  <span className="font-bold text-xs lg:font-bold lg:text-lg">
                    {item.title}
                  </span>
                  <p className="text-left text-xs font-normal md:leading-[14.52px] row-span-2 mt-3">
                    {item.description}
                  </p>
                </div>

                <div className="mr-3 my-auto">
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
        <div className="flex-initial flex-col w-[120px] lg:w-[213px] float-right lg:right-0 mobile:right-0">
          <Popularretail />
          <div className="hidden mobile:flex">
            <img src="./images/image101.png/" alt="sale picture" />
          </div>
          <NewRetail />
        </div>
      </div>
    </>
  )
}

export default ViewEditorsPick
