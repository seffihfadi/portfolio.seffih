

const Testimonial = ({testimonial, bgColor}) => {
  
  return (
    <>
    {testimonial.pub && 

      <figure>
        <blockquote className="mt-4">
          <p>{testimonial.project && <a className="text-blue-800" href={testimonial.project}>(About Project)</a> } {testimonial.feedback}</p>
        </blockquote>
        <figcaption className="flex items-center">
          <div className="img" style={{background: bgColor}}>{testimonial.name[0]}</div>
          <div className="flex-auto mx-4">
            <div className="text-base">
              <h3 className="font-bold capitalize">{testimonial.name}</h3>
            </div>
            {testimonial.job && <div className="mt-1 capitalize">{testimonial.job}</div>}
          </div>
        </figcaption>
      </figure>
      
    }
    </>
  )
}

export default Testimonial