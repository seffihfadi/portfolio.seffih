
import { motion } from "framer-motion"

const Learned = ({ skills }) => {

  return (
    <div className="learned">
      <div className="grid grid-cols-12">
        {skills && skills.map((skill) => 
          <motion.div
            key={skill._id} 
            whileHover={{scale: 1.05}} 
            whileTap={{scale: .95}} 
            className="tech"
          >
            <img src={skill.logo.asset.url} alt={skill.name} />
            <span>{skill.name}</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Learned