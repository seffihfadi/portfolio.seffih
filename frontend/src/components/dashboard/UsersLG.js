import { useUsers, useTestimonials } from '../../utils/context/UsersContext'
import { useProjects } from '../../utils/context/ProjectsContext'
import { useState } from 'react'


const User = ({ user, i }) => {
  const actArr = []
  const testimonials = useTestimonials()
  //console.log('testimonials', testimonials)
  const [dropdown, setDropdown] = useState(true)
  const projects = useProjects()
  if (projects) {
    for (const project of projects){
      const isHeLikeIt = project.likes && project.likes.filter((like) => like.id == user._id).length > 0
      isHeLikeIt && actArr.push(`liked "${project.title}"`)
    
      const isHeViewIt = project.views && project.views.filter((view) => view.id == user._id).length > 0
      isHeViewIt && actArr.push(`viewed "${project.title}"`)
    }
  }

  if (testimonials) {
    for (const testimonial of testimonials) {
      const isHeLeaveRate = testimonial.anoID == user._id
      isHeLeaveRate && actArr.push(`leave feedback with name : "${testimonial.name}"`)
    }
  }
  
  return (
    <tr>
      <td>{i+1}</td>
      <td className='logo'>
        <img className="hidden md:inline-block" src={require(`../../assets/imgs/${user.comingfrom}.png`)} alt={user.comingfrom} />
        <span>{user.comingfrom}</span>
      </td>
      <td>{new Date(user._createdAt).toUTCString()}</td>
      <td>
        {actArr.length > 0
        ?
          <select className="w-5 px-2 dark:bg-slate-800 focus:outline-none">
            {actArr.map((act, i) => <option key={i}>{act}</option>)}
          </select>
        :
          'no'
        }

      </td>
    </tr>
  )
}

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
              <th>Act</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, i) => 
              <User key={i} user={user} i={i} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersLG