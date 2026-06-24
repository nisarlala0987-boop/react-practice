import React, { createContext } from 'react'
import { useState } from 'react'


export const themeContext =createContext()

function Themechange({children}) {
const[state,setState]=useState("halka")
   
const theme =()=>{
if (state==="halka") {
    setState("taiz")
}

if (state==="taiz") {
    setState("halka")
}

}


  return (
  <  themeContext.Provider value={{state,theme}}> 
  {children}
  </themeContext.Provider>
  )
}

export default Themechange