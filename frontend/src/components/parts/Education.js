import { motion } from "framer-motion"
import { educationParentVars, educationChildVars } from '../../assets/anim/animation'

const Education = ({ educations }) => {

  return (
    <div className="col-span-12 lg:col-span-4">
      <motion.ul 
        variants={educationParentVars} 
        initial='hidden' 
        whileInView='visible' 
        viewport={{once: false}}
        className='sticky top-16'
      >
        <h2 className="capitalize text-3xl">education</h2>
        {educations && educations.map((education) => 
          <motion.li variants={educationChildVars} key={education._id}>
            <span>{education.duration}</span>
            <h6>{education.title}</h6>
            <p>{education.description}</p>
          </motion.li>
        )}
      </motion.ul>
    </div>
  )
}

export default Education