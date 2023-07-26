import { motion } from 'framer-motion'
import { doChildVars } from '../../assets/anim/animation'

const Do = ({ canDo }) => {
  return (
    <motion.div
      variants={doChildVars}
      whileTap={{scale: 0.9}}
      className="box"
    >
      <span className="material-symbols-rounded">{canDo.icon}</span>
      <h3>{canDo.name}{canDo?.soon && <span>soon</span>}</h3>
      <p>{canDo.desc}</p>
    </motion.div>
  )
}

export default Do