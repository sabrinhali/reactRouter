import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Blog from "./pages/Blog"
import Header from './components/Header'

function App() {
  return (
   <>
   <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>}> </Route>
    <Route path='/Service' element={<Service/>}> </Route>
    <Route path='/Blog' element={<Blog/>}> </Route>
  </Routes>
   
   
   </>
  )
}
export default App