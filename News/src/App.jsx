import { useState } from "react"
import Newsheader from "./components/Header/Newsheader"
import Topheader from "./components/Header/Topheader"
import Maincontent from "./components/Content/maincontent"
import Footer from "./components/Footer/Footer"

function App() {
  const [header, setHeader] = useState('The: News')
  // const a = getNewsInfo()
  // const b = Object.keys(a).slice(0,4)
  // console.log(b)
  // console.log(a[b[0]].title)
  
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
