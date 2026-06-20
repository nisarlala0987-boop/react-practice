import React from 'react'
import {  useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import User from './assets/product/user'
import Navbar from './assets/component/Navbar'

function App() {
  const router = useRoutes([
    {path:"/",element:<Home/>},
    {path:"/about",element:<About/>},
    {path:"/user/:username",element: <User/>  },
  {path:"*" , element:"Not found"}

  ])
  return (
    <div>
   <Navbar/>

{router}
    </div>

  )
}

export default App