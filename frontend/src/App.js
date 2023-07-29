import { useState, useEffect } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import { ProjectsProvider } from './utils/context/ProjectsContext'

const App = () => {

  return (
    <ProjectsProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </ProjectsProvider>
  );
}

export default App;
