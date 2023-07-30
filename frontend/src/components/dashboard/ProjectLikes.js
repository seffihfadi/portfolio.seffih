import { useProjects } from "../../utils/context/ProjectsContext"

const ProjectLikes = () => {
  const projects = useProjects()
  let totalLikes = 0
  if (projects != null) {
    for (let project of projects) {
      const projectLikes = project.likes?.length || 0
      totalLikes = totalLikes + projectLikes
    }
  }
  
  return (
    <div className="admin-box sm">
      <span className="material-symbols-rounded">favorite</span>
      <div className="count">
        <h3>{totalLikes}</h3>
        <span>projects likes</span>
      </div>
    </div>
  )
}

export default ProjectLikes