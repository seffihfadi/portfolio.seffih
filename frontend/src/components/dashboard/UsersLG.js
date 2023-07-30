import { useUsers } from '../../utils/context/UsersContext'
import { useState } from 'react'

const UsersLG = () => {
  const { users, setFilter, filter } = useUsers()
  const [index, setIndex] = useState(0)

  const days = ['week', 'month', 'all', 'today']
  const handleClick = () => {
    setIndex(index < days.length-1 ? index+1 : 0)
    setFilter(days[index])
  }
  
  return (
    <div className="admin-box lg">
      <div className="flex justify-between items-center">
        <div className="count">
          <h3>{users && users.length}</h3>
          <span>portfolio views ( {filter} )</span>
        </div>
        <button onClick={handleClick} className="btn-switch">{days[index]}</button>
      </div>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Site</th>
              <th>Date</th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, i) => 
              <tr key={i}>
                <td>{i+1}</td>
                <td className='logo'>
                  <img src={require(`../../assets/imgs/${user.comingfrom}.png`)} alt="" />
                  <span>{user.comingfrom}</span>
                </td>
                <td>{new Date(user._createdAt).toUTCString()}</td>
                <td> Act </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersLG