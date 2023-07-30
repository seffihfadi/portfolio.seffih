import { Chart } from 'react-google-charts'
import { client } from '../../client'
import { technologyQuery } from '../../utils/serverData'
import { useState, useEffect } from 'react'
import { useTheme } from '../../utils/context/UsersContext'

const TechnologiesMD = () => {

  const [technologies, setTechnologies] = useState(null)
  const theme = useTheme()

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
    ["Technologies", "Percentage"],
    ["Well In", wellin],
    ["Coming", coming], // CSS-style declaration
  ]
  
  const options = {
    legend: "none",
    pieSliceText: "label",
    pieHole: 0,
    is3D: true,
    backgroundColor: theme,
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
  }
  return (
    <div className="admin-box md">
      <div className="count">
        <h3>{technologies?.length}</h3>
        <span>total technologies</span>
      </div>
      <div className="chart">
        <Chart
          chartType="PieChart"
          width="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default TechnologiesMD