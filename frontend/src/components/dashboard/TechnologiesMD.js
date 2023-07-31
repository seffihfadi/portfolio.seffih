import { client } from '../../client'
import { technologyQuery } from '../../utils/serverData'
import { useState, useEffect } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const TechnologiesMD = () => {

  const [technologies, setTechnologies] = useState(null)

  useEffect(() => {
    client
      .fetch(technologyQuery)
      .then((technologies) => {
        setTechnologies(technologies)
      })
  }, [])

  let wellin = 0
  let coming = 0
  if (technologies != null) {
    for (const technology of technologies){
      if (technology.percentage > 75) {
        wellin++
      } else {
        coming++
      }
    }
  }
  
const data = [
  { name: 'Well In', value: wellin },
  { name: 'Comming Soon', value: coming }
];

const COLORS = ['#ad9274', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
    <div className="admin-box md">
      <div className="count">
        <h3>{technologies?.length}</h3>
        <span>total technologies</span>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fillOpacity={0.7} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TechnologiesMD