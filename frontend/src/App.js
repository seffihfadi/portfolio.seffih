import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import { ProjectsProvider } from './utils/context/ProjectsContext'

const App = () => {

  return (
    <ProjectsProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<NotFound msg="404 | page not found" />} />
      </Routes>
    </ProjectsProvider>
  );
}

export default App;
