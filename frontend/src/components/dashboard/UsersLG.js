

const UsersLG = () => {
  return (
    <div className="admin-box lg">
      <div className="flex justify-between items-center">
        <div className="count">
          <h3>63 Last Week</h3>
          <span>portfolio views</span>
        </div>
        <button className="btn-switch">toogle</button>
      </div>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Site</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className='logo'>
                <img src={require('../../assets/imgs/github.png')} alt="" />
                <span>github</span>
              </td>
              <td>29 jul 2023 at 8:00</td>
            </tr>
            <tr>
              <td>2</td>
              <td className='logo'>
                <img src={require('../../assets/imgs/linkedin.png')} alt="" />
                <span>linkedin</span>
              </td>
              <td>28 jul 2023 at 12:45</td>
            </tr>
            <tr>
              <td>3</td>
              <td>instagram</td>
              <td>28 jul 2023 at 9:00</td>
            </tr>
            <tr>
              <td>1</td>
              <td>facebook</td>
              <td>29 jul 2023 at 8:00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>linkedin</td>
              <td>28 jul 2023 at 12:45</td>
            </tr>
            <tr>
              <td>3</td>
              <td>instagram</td>
              <td>28 jul 2023 at 9:00</td>
            </tr>
            <tr>
              <td>1</td>
              <td>facebook</td>
              <td>29 jul 2023 at 8:00</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersLG