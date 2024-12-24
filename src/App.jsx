import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Authentication from './components/Authentication';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/authentication' element={<Authentication/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/*' element={<Navigate to="/authentication" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App