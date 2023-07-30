import { useProjects } from "../../utils/context/ProjectsContext"

const ProjectViews = () => {
  const projects = useProjects()
  let totalViews = 0
  if (projects != null) {
    for (let project of projects) {
      const projectViews = project.views?.length || 0
      totalViews = totalViews + projectViews
    }
  }
  return (
    <div className="admin-box sm">
      <span className="material-symbols-rounded">visibility</span>
      <div className="count">
        <h3>{totalViews}</h3>
        <span>projects views</span>
      </div>
    </div>
  )
}

export default ProjectViews