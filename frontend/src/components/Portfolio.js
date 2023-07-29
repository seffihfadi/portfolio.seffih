import Project from './parts/Project'
import { motion } from 'framer-motion'
import { useProjects } from '../utils/context/ProjectsContext'

const Portfolio = () => {
  const projects = useProjects()
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h1 className="title">portfolio</h1>
        <motion.div 
          initial={{y: 50, opacity: 0}} 
          whileInView={{y: 0, opacity: 1}} 
          viewport={{once: true}}
          transition={{type: 'spring', stiffness: 150}}
          className="grid grid-cols-12 gap-7"
        >
          {projects && projects.map((project) => project.pub &&
            <Project key={project._id} project={project} />
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio