import React from "react"
import { useState } from "react"
import Topheader from "./components/Header/Topheader"
import Newsheader from "./components/Header/Newsheader"
import Footer from "./components/Footer/Footer"
import Navigation from "./components/Sidenavigation/Navigation"
import Countrynav from "./components/Header/Countrynav"
import { Outlet } from "react-router-dom"

function Layout() {
  const [header, setHeader] = useState("World")

  return (
    <>
      
      <Topheader />
      <Newsheader header={header} />
      {/* <div className="  "> */}
        <Navigation />
        {/* </div> */}
      

      <div className="flex sm:ml-[100px] md:ml-[120px] lg:ml-[160px] lg:mr-6 mr-2 ">
      
        

        <div className="w-full flex flex-col flex-1 ml-2">
          <div className="w-full left-0">
            <Countrynav />
          </div>

          <Outlet />

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Layout
