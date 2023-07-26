import { useState, useEffect } from 'react'
import { testimonialQuery } from '../utils/serverData'
import { client } from '../client'
import Testimonial from './parts/Testimonial'

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
        <div className="testi">
          {testimonials && testimonials.map((testimonial, i) => 
            <Testimonial key={i} bgColor={colors[i%colors.length]} testimonial={testimonial} />
          )}
        </div>
        {/*<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 dark:from-slate-800 dark:to-slate-750 dark:opacity-60 absolute">
          <button className="btn-primary">show more</button>
  </div>*/}
      </div>
    </section>

  )
}

export default Testimonials