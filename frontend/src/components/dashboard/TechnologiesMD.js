import { Chart } from 'react-google-charts'

const TechnologiesMD = () => {
  
  const data = [
    ["Technologies", "Percentage"],
    ["Well", 9],
    ["Coming", 11], // CSS-style declaration
  ]
  
  const options = {
    legend: "none",
    pieSliceText: "label",
    pieHole: 0,
    is3D: false,
    backgroundColor: '#fff',
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
  }
  return (
    <div className="admin-box md">
      <div className="count">
        <h3>20</h3>
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