import { useState } from 'react'
import on from './icons/on.svg'
import off from './icons/off.svg'
import './App.css'

function App() {
  const [onImage, setImage] = useState(on)

// use an if function to set on or off
  function isConnected() {
    if (onImage == on){
      setImage(off)
    } else {
      setImage(on)
  }
  }
  
  //()=>setConnection(!connection)

  return (
    <>
      {/* <div>
        <img src={off} className="logo" alt="off image" />
      </div> */}
      <div>
        <h1>{onImage === on ? "ON" : "OFF"} </h1>
        <img onClick={()=>isConnected() } src={onImage} className="speaker" alt="speaker image" />
      </div>
      
    </>
  )
}

export default App
