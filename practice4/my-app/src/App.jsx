import React from 'react'
import Themechange, { changeContext } from './Themechange/Themechange.jsx'
import { useContext } from 'react'
function App() {
  const {theme , changing}=useContext(changeContext)
const myStyle ={
backgroundColor: theme === "halka" ? "white" : "black",
  height: "100vh",
}



  return (
    <div style={myStyle}>App
<button onClick={changing}>change</button>
    </div>
  )
}

export default App