import { Chart } from 'react-google-charts'
import { useState, useEffect } from 'react'
import { testimonialQuery } from '../../utils/serverData'
import { client } from '../../client'
import { useTheme } from '../../utils/context/UsersContext'


const TestimonialsMD = () => {
  const [testimonials, setTestimonials] = useState(null)
  const theme = useTheme()
  
  useEffect(() => {
    client
      .fetch(testimonialQuery)
      .then((testis) => {
        setTestimonials(testis)  
      })
  }, [])

  //console.log('testimonials', testimonials)
  let pubNum = 0
  let priNum = 0
  if (testimonials != null) {
    for (const testimonial of testimonials){
      if (testimonial.pub) {
        pubNum++
      } else {
        priNum++
      }
    }
  }

  

  const data = [
    ["Testimonial", "Publish"],
    ["Public", pubNum], // RGB value
    ["Privat", priNum], 
  ];
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
        <h3>{testimonials?.length}</h3>
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