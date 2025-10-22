import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, NotFound } from '../Pages'

function RoutApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutApp
