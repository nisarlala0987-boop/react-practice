// import React, { useState } from 'react'
// import  Component3 from './component/Component3'
// import Component1 from './component/Component1'
// import { createContext } from 'react'

// export const setContext = createContext() 
// function App() {
//   const [name, setName] =useState("nisar khan")
//   rturn (
//     <div> 
//   <setContext.Provider value={name}>
//       <Component1  />
//       <Component3 />
//     </setContext.Provider>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useContext } from 'react'
import Themechange, { themeContext } from './component/Themechange'

function App() {
const { state, theme } = useContext(themeContext)
console.log(state)
const myStyle = {
  backgroundColor: state === "halka" ? "white" : "black",
  color: state === "halka" ? "black": "white",
  minHeight: "100vh",
  margin: 0,
  padding: 0
}
  return (
  
<div style={myStyle}>
  <p>hhhh</p>
  <button onClick={theme}>click</button>

</div>

  )
}

export default App