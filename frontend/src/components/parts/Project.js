import Techno from '../parts/Techno'
import { LikeBtn, ViewBtn } from './ProjectBtns'
import { motion } from 'framer-motion'

const Project = ({ project }) => {

  
  return (
    <motion.div 
      whileHover={{y: -5}} 
      whileTap={{scale: .99}} 
      className="project" 
      style={{background: project.color}}
    >
      
      
      <div className="absolute">
        <div className="txt">
          <div className="logo">
            <img src={project.logo.asset.url} alt={project.title} />
          </div>
          <div className="title">
            <h3>{project.title}</h3>
            <span>Posted on {new Date(project._createdAt).toDateString().toLowerCase()}</span>
          </div>
        </div>
        <div className="desc">
            <p className='text-sm md:text-base'>{project.description}</p>
        </div>
        <div className="tech">
          <Techno technos={project.technologies} />
          <div className="flex gap-3 btns-react">
            <LikeBtn project={project} />
            <ViewBtn project={project} />
          </div>
        </div>
      </div>
      <div className="mokup h-full">
        <img className='h-full' src={project.mokup.asset.url} alt={project.title} />
      </div>
    </motion.div>
  )
}

export default Project