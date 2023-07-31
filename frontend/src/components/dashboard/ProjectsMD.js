import { useProjects } from '../../utils/context/ProjectsContext'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const ProjectsMD = () => {

  const projects = useProjects()
  const pub = projects?.filter((product) => product.pub === true).length
  const pri = projects?.filter((product) => product.pub === false).length



  const data = [
    {
      name: 'Public',
      num: pub
    },
    {
      name: 'Privat',
      num: pri
    }
  ]

  return (
    <div className="admin-box md">
      <div className="count">
        <h3>{projects && projects.length}</h3>
        <span>total projects</span>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}  >
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="num" fillOpacity={0.7} fill="#ad9274" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProjectsMD