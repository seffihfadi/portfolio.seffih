import { Chart } from 'react-google-charts'


const TestimonialsMD = () => {
  
  const data = [
    ["Testimonial", "Publish"],
    ["Public", 29], // RGB value
    ["Privat", 11], 
  ];
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
        <h3>40</h3>
        <span>total testimonials</span>
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

export default TestimonialsMD