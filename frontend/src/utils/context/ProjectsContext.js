import { useState, createContext, useEffect, useContext } from 'react'
import { client } from '../../client'
import { projectQuery } from '../../utils/serverData'

const ProjectsContext = createContext(null)

export const useProjects = () => {
  return useContext(ProjectsContext)
}

export const ProjectsProvider = ({ children }) => {

  const [projects, setProjects] = useState(null)

  useEffect(() => {
    client
      .fetch(projectQuery)
      .then((prs) => {
        setProjects(prs)
      })
  }, [])

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  )
}
