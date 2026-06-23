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
import Themechange from './component/themechange'

function App() {
  const [state,theme]=useContext(Themechange)
  console.log
  return (
    <div style={}>
      App
      <button onClick={theme}>change theme</button>


    </div>
  )
}

export default App