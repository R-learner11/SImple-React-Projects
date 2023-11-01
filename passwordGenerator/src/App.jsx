import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-{}[]~"

    for (let i=1 ; i<= length ;i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md shadow-md rounded-lg mx-auto px-4 py-4 my-8  text-white"
    style={{backgroundColor: '#232D3F'}}>
    <h3 className='text-center text-white mt-3 '>Password Generator</h3>
      <div className="flex flex-shadow rounded-lg overflow-hidden mb-4 mt-2">
        <input
        type="text"
        value = {password}
        placeholder='password'
        className=" flex-wrap h-10 w-full rounded-md border text-black bg-white border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-black-900"
        readOnly
        ref={passwordRef}
        />
        <button
          className="rounded-xl bg-cyan-800 mx-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={copyPasswordToClipBoard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={20}
          value={length}
          className='curser-pointer text-center'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label >Length:({length})</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           defaultChecked = {numberAllowed}
           id='numberInput'
           onChange={()=>{
            setNumberAllowed((prev)=> !prev);
           }}
           />
           <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           defaultChecked = {charAllowed}
           id='charInput'
           onChange={()=>{
            setCharAllowed((prev)=> !prev);
           }}
           />
           <label>Characters</label>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App
