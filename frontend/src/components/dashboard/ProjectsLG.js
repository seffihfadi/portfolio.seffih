import { useProjects } from '../../utils/context/ProjectsContext'

const ProjectsLG = () => {
  const projects = useProjects()
  return (
    <div className="admin-box lg">
      <div className="flex justify-between items-center">
        <div className="count">
          <h3>{projects && projects.length}</h3>
          <span>total projects</span>
        </div>
      </div>
      <div className="data">
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Logo</th>
              <th>Post Date</th>
              <th>Likes</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {projects && projects.map((project, i) => 
              <tr key={i}>
                <td>{i+1}</td>
                <td className='pro-logo'>
                  <a title={project.title} href={project.link}>
                    <img src={project.logo.asset.url} alt={project.title} />
                    {/*<img src={require('../../assets/imgs/github.png')} alt="" />
                    <span>{project.title}</span>*/}
                  </a>
                </td>
                <td>{new Date(project._createdAt).toDateString()}</td>
                <td>{project.likes?.length || 0}</td>
                <td>{project.views?.length || 0}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectsLG