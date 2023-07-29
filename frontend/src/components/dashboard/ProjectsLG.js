

const ProjectsLG = () => {
  return (
    <div className="admin-box lg">
      <div className="flex justify-between items-center">
        <div className="count">
          <h3>14</h3>
          <span>total projects</span>
        </div>
      </div>
      <div className="data">
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>L</th>
              <th>V</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className='logo'>
                <a href="#">
                  <img src={require('../../assets/imgs/github.png')} alt="" />
                  <span>github</span>
                </a>
              </td>
              <td>2 feb 2023</td>
              <td>15</td>
              <td>2</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>2</td>
              <td className='logo'>
                <a href="#">
                  <img src={require('../../assets/imgs/linkedin.png')} alt="" />
                  <span>porfolio</span>
                </a>
              </td>
              <td>15 oct 2023</td>
              <td>15</td>
              <td>2</td>
              <td>no</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectsLG