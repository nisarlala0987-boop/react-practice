import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const changeContext= createContext()
function Themechange({children}) {
const [theme,usetheme]=useState("halka")
const changing =()=>{
  if (theme==="halka") {
    usetheme("taiz")
}
if (theme==="taiz") {
    usetheme("halka")
}  
}

  return (
    <changeContext.Provider value={{theme,changing}}>
{children}

    
    </changeContext.Provider>
  )
}

export default Themechange