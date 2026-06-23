import React from 'react'
import { useContext } from 'react'
import { setContext } from '../App'
function Component3() {
  const usename = useContext( setContext)
  const name ="abc" 
  return (
    <div>component3
      hshhshhshh
<h1>{name}</h1>
    </div>
  )
}

export default Component3