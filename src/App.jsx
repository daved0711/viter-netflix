import React from 'react'

import Homepage from './components/Frontend/Home/Homepage'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './components/Backend/movies/Movies'


const App = () => {
  return (
 <Router>
  <Routes>
    <Route index element={<Homepage/>}/>
     <Route path="/admin/movies" element ={<Movies/>}/>  
  </Routes>
 </Router>
  )
}

export default App
