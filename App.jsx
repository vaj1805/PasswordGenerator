import { useState, useCallback , useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*_+=-[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numAllowed, charAllowed, setpassword])

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    passwordGenerator()
  } , [length , numAllowed  ,charAllowed])

  return (
    <>

      <div className='w-md max-w-md mx-auto p-6 shadow-md rounded-lg px-4 my-8 text-gray-500 bg-gray-900'>
        <h2 className='text-white my-3 text-2xl text-center mb-4'>Password Generator</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none text-lg w-full py-1 px-3 bg-white text-gray-700'
            placeholder='password'
            readOnly
            ref = {passwordRef}
          />

          <button 
          onClick={copyPasswordtoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setnumAllowed((prev) => !prev) //true or false flipped.
              }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setcharAllowed((prev) => !prev) //true or false flipped.
              }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
