import { useState } from "react"
import Newsheader from "./components/Header/Newsheader"
import Topheader from "./components/Header/Topheader"
import Maincontent from "./components/Content/maincontent"
import Footer from "./components/Footer/Footer"

function App() {
  
  return (
    <>
      <Topheader/>
      <Newsheader header={header}/>
      <Maincontent />
      <Footer />
      </>
  )
}

export default App
