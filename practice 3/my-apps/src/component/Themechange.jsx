import React, { createContext } from 'react'
import { useState } from 'react'


const themeContext =createContext()

function Themechange({childern}) {
const[state,setState]=useState("halka")
   
const theme =()=>{
if (theme==="halka") {
    setState("taiz")
}

if (theme==="taiz") {
    setState("halka")
}

}


  return (
  <  themeContext.Provider value={{state,theme}}> 
  {childern}
  </themeContext.Provider>
  )
}

export default Themechange