

const Education = ({ educations }) => {
  return (
    <div className="col-span-12 lg:col-span-4">
      <ul className='sticky top-16'>
        <h2 className="capitalize text-3xl">education</h2>
        {educations && educations.map((education) => 
          <li key={education._id}>
            <span>{education.duration}</span>
            <h6>{education.title}</h6>
            <p>{education.description}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Education