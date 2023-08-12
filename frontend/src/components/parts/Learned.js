import { motion } from "framer-motion"
import { learnedParentVars, learnedChildVars } from '../../assets/anim/animation'

const Learned = ({ skills }) => {

  return (
    <div className="learned">
      <motion.div 
        initial='hidden' 
        whileInView='visible' 
        variants={learnedParentVars} 
        className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12"
      >
        {skills && skills.map((skill) => 
          <motion.div
            /*title={skill.name}*/
            variants={learnedChildVars}
            key={skill._id} 
            whileHover={{scale: skill.percentage > 80 && 1.1}} 
            whileTap={{scale: skill.percentage > 80 && .9}} 
            className="tech"
          >
            <img src={skill.logo.asset.url} alt={skill.name} />
            <span>{skill.name}</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Learned