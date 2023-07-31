import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useTestimonials } from '../../utils/context/UsersContext'


const TestimonialsMD = () => {
  const testimonials = useTestimonials()
  //console.log('testimonials', testimonials)
  let pubNum = 0
  let priNum = 0
  if (testimonials) {
    for (const testimonial of testimonials){
      if (testimonial.pub) {
        pubNum++
      } else {
        priNum++
      }
    }
  }

  const data = [
    {
      name: 'Public',
      num: pubNum
    },
    {
      name: 'Privat',
      num: priNum
    }
  ]

  return (
    <div className="admin-box md">
      <div className="count">
        <h3>{testimonials?.length}</h3>
        <span>total testimonials</span>
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

export default TestimonialsMD