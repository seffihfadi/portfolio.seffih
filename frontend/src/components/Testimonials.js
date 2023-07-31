import { useState, useEffect } from 'react'
import { testimonialQuery } from '../utils/serverData'
import { client } from '../client'
import Testimonial from './parts/Testimonial'
import { motion } from 'framer-motion'

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState(null)
  const colors = ['#ffce44', '#9F4298', '#E2495B', '#8E7C68', '#ae874a', '#0C4A60']

  useEffect(() => {
    client
      .fetch(testimonialQuery)
      .then((testimonials) => {
        setTestimonials(testimonials)  
      })
  }, [])

  return (
    <section className="testimonials" id="testimonials">
      <div className="container relative">
        <h1 className="title">testimonials</h1>
        <motion.div 
          initial={{y: 50, opacity: 0}} 
          whileInView={{y: 0, opacity: 1}} 
          transition={{type: 'spring', stiffness: 150}}
          className="testi"
        >
          {testimonials && testimonials.map((testimonial, i) => 
            <Testimonial key={i} bgColor={colors[i%colors.length]} testimonial={testimonial} />
          )}
        </motion.div>
      </div>
    </section>

  )
}

export default Testimonials