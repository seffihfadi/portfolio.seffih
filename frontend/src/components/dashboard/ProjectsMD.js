import { Chart } from 'react-google-charts'

const ProjectsMD = () => {
  
  const data = [
    ["Project", "Published"],
    ["Public", 30],
    ["Privat", 15], // CSS-style declaration
  ]
  const options = {
    legend: "none",
    backgroundColor: '#fff',
    animation: {
      startup: true,
      easing: "linear",
      duration: 1000,
    },
  }
  
  return (
    <div className="admin-box md">
      <div className="count">
        <h3>45</h3>
        <span>total projects</span>
      </div>
      <div className="chart">
        <Chart
          chartType="ColumnChart"
          width="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default ProjectsMD