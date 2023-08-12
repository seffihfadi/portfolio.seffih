import { useUsers } from '../../utils/context/UsersContext'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const UsersMD = () => {
  const { users } = useUsers()
  const sites = ['facebook', 'instagram', 'linkedin', 'github', 'other', 'direct']
  const data = []

  if(users){
    for(const site of sites) {
      let numFromSite = 0
      for(const user of users) {
        if(user?.comingfrom.toString().indexOf(site) !== -1) {
          numFromSite++
        }
      }
      data.push({subject: site, A: numFromSite, fullMark: users?.length})
    }
  }

  return (
    <div className="admin-box md">
      <div className="count">
        <h3>{users?.length}</h3>
        <span>total portfolio views</span>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" fontSize={12} />
            <Radar dataKey="A" fillOpacity={0.7} fill="#ad9274" />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UsersMD