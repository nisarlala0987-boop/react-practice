import React, { createContext, useRef } from 'react'
import { useState,useEffect } from 'react'
// import { Router, Routes, Route,Link } from 'react-router-dom'
import Button from './components/Button/Button'

// import Navbar from "./components/Navbar/Navbar"
// import Watch from './components/Button/watch'
import "./App.css"
import Data from './components/Button/component'
import { runcontext } from './components/Button/context'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
function App() {
  const [count,setCount]=useState(0)
  const [color, setColor] = useState(0)
  // const [effect,find]=useState()

//   useEffect(() => {
// console.log("useEffect is called");
//     setTimeout(() => {
//     // setCount(count + 5)
//   }, 2000);
// }, )

// useEffect(() => {
 
// alert("color is working")
// setColor(count + 1)
  
// }, [count])
// useEffect(() => {

// }, [])


// useEffect(() => {
// alert("count is working")
// }, [count])

const coun =useRef(0)
coun.current=10
console.log(coun.current)

// const inre=>
  useEffect(() => {
    coun.current =coun.current+1
    console.log(`counting is increasing ${count}`);
}, )
  return (
      < runcontext.Provider value={count}>
      <div className="App">


      <h1>Counter App</h1>
   <Data/>
      {/* <Navbar color={"blue"+" "+"navy"}/> */}
      <button onClick={()=>(setCount(count+1))}>count</button>
      {/* <button onClick={()=>(setCount(color+1))}>count</button> */}
      <h2>{count}</h2>
      {/* <Watch /> */}

      {/* <Button incre={incre} decre={decre} zero={zero}/> */}
    
      {/* <input type="text" onChange={onhandle} placeholder='enter a number' /> */}
      {/* <h2>{effect}</h2> */}
      {/* <Router>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router> */}
    </div>
         </runcontext.Provider>

  )
}
export default App















// useEffect(() => {
 
// setTimeout(() => {
//   setCount(count + 5)
// }, 2000);


// }, )



//   const incre=()=>{
//     setCount(count+1)
//     if (count < 10) {
//       setCount(count +1)
//     }
//     else {  setCount(10)
//     }
//   }
//   const decre=()=>{
//     setCount(count< -1)
//  if (count > 0) {
//   setCount(count - 1)

//  } 
//  else {  setCount(0)
//  }
//   }
  
  
//   const zero=()=>{
//     setCount(0)
//   }
  


//   function onhandle(input) {
//     let Input=input.target.value
    

// if (/^\d*$/.test(Input)) {
// setCount(Input)
// find("")
  
// }
// else{

//   find("lettter are not allowed")
// }
//   }