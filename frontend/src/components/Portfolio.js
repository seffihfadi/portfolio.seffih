import { ProjectsContext } from '../utils/contextApi'
import Project from './parts/Project'
import { useContext } from 'react'

const Portfolio = () => {
  const projects = useContext(ProjectsContext)
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h1 className="title">portfolio</h1>
        <div className="grid grid-cols-12 gap-7">
          {projects && projects.map((project) => project.pub &&
            <Project key={project._id} project={project} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio