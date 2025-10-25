import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, NotFound } from '../Pages'
import { NavBar } from '../Components';

function RoutApp() {
  return (
      <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutApp
