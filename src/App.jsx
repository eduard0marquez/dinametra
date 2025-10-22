import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import { Home,Auth } from './Pages/index.js'
import RutasProtegidas from './routes/RutasProtegidas.jsx';
import RoutApp from './routes/RoutApp.jsx';



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/*' element={<RutasProtegidas><RoutApp /></RutasProtegidas>} />
        
        <Route path='/auth' element={<Auth/>} />
      </Routes>
      
    </>
  )
}

export default App
