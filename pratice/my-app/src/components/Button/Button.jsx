import React from 'react'
import './Button.css'

function Button(props) {
        const {incre,decre,zero}=props
        
  return (
     <div className="btn-container">
     <button className="btn" onClick={incre}>
        increament
      </button>
      <button className="btn" onClick={decre}>
        decreament
       </button>
       <button className="btn" onClick={zero}>
        zero
       </button>
      
     </div>
    
  )
}

export default Button
