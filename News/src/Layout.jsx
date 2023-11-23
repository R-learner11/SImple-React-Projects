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

      <div className="flex lg:mr-6">
        <div className="flex-initial">
          <Navigation />
        </div>

        <div className="w-full flex-1">
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
