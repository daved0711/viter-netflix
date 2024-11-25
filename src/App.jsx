import React from 'react'


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './components/Backend/movies/Movies'
import Settings from './components/Backend/settings/Settings'
import { StoreProvider } from './components/Store/storeContext'
import Homepage from './components/Frontend/Homepage/Homepage'


const App = () => {
  return (
    <StoreProvider>
 <Router>
  <Routes>
    <Route index element={<Homepage/>}/>
     <Route path="/admin/movies" element ={<Movies/>}/>  
     <Route path="/admin/settings" element ={<Settings/>}/>  
  </Routes>
 </Router>
 </StoreProvider>
  )
}

export default App
