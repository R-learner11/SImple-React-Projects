import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const notice = (message) =>{
    alert(message)
  }

  const enterCafe = () => {
    if (count<20)
      setCount(count+1); 
    else
     notice("The cafe is full.")
      
  }

  const leaveCafe = () => {
    if (count>0)
      setCount(count-1)
    else
      notice("The cafe is empty!")
    
  }

  return (
    <>
     <p>Let's count how many people are inside wake-up cafe.</p>
     <h1>Customer counter: {count}</h1>
    <button onClick={enterCafe}>Entered cafe</button>
    <br /><br />
    <button onClick={leaveCafe}>Left cafe</button>

    </>
  )
}

export default App
