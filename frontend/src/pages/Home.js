import { 
  Navbar,
  Footer, 
  Hero, 
  Bio, 
  EduSkills, 
  CanDo, 
  Portfolio, 
  Testimonials, 
  Contact 
} from "../components"
import { useState, useEffect, createContext } from 'react'
import { projectQuery } from '../utils/serverData'
import { client } from '../client'
import { ProjectsContext } from "../utils/contextApi"

const Home = () => {

  
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    client
      .fetch(projectQuery)
      .then((projects) => {
        setProjects(projects)
      })
  }, [])

  return (
    <ProjectsContext.Provider value={projects}>
      <Navbar />
      <main className="relative">
        <Hero />
        <Bio />
        <EduSkills />
        <CanDo />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ ProjectsContext.Provider>
  )
}

export default Home