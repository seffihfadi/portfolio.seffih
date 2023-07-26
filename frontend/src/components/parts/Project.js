import Techno from '../parts/Techno'
import { LikeBtn, ViewBtn } from './ProjectBtns'

const Project = ({ project }) => {

  
  return (
    <div className="project" style={{background: project.color}}>
      <div className="txt">
        <div className="logo">
          
          <img src={project.logo.asset.url} alt={project.title} />
        </div>
        <div className="title">
          <h3>{project.title}</h3>
          <div className="info">
            <LikeBtn project={project} />
            <ViewBtn project={project} />
          </div>
        </div>
      </div>
      <div className="mokup h-full">
        <img className='h-full' src={project.mokup.asset.url} alt="" />
        <Techno technos={project.technologies} />
      </div>
    </div>
  )
}

export default Project