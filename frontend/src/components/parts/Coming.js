import { motion } from "framer-motion"
import { comingParentVars, comingChildVars } from '../../assets/anim/animation'

const Coming = ({ coming }) => {

  return (
    <motion.div 
      className="upcoming"
      initial='hidden' 
      whileInView='visible' 
      variants={comingParentVars} 
    >
      {coming && coming.map((skill) => 
        <motion.div 
          key={skill.name} 
          className="skill"
          variants={comingChildVars}
        >
          <div className="col-span-2">
            <h4>{skill.percentage}</h4>
          </div>
          <div className="col-span-10">
            <div className="prog">
              <div style={{width: `${skill.percentage}%`}} >{skill.name}</div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Coming