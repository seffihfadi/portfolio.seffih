import { Chart } from 'react-google-charts'
import { useProjects } from '../../utils/context/ProjectsContext'
import { useTheme } from '../../utils/context/UsersContext'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const ProjectsMD = () => {

  const theme = useTheme()
  const projects = useProjects()
  const pub = projects?.filter((product) => product.pub === true).length
  const pri = projects?.filter((product) => product.pub === false).length

  const data = [
    ["Project", "Published"],
    ["Public", pub],
    ["Privat", pri], // CSS-style declaration
  ]
  const options = {
    legend: "none",
    backgroundColor: theme,
    animation: {
      startup: true,
      easing: "linear",
      duration: 1000,
    },
  }

  
  return (
    <div className="admin-box md">
      <div className="count">
        <h3>{projects && projects.length}</h3>
        <span>total projects</span>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProjectsMD