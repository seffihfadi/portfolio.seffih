import { Chart } from 'react-google-charts'

const UsersMD = () => {

  const data = [
    ["Site", "Views Number"],
    ["Facebook", 15],
    ["Instagram", 15],
    ["Linkedin", 20],
    ["Github", 10],
    ["Others", 3], // CSS-style declaration
  ]
  
  const options = {
    /*title: "My Daily Activities",*/
    legend: "none",
    pieSliceText: "label",
    pieHole: 0,
    is3D: true,
    backgroundColor: '#fff'
  }
  return (
    <div className="admin-box md">
      <div className="count">
        <h3>63</h3>
        <span>total portfolio views</span>
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

export default UsersMD