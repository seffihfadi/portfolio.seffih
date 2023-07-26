import { whatCanIDo } from "../utils/localData"
import Do from "./parts/Do"
import { motion } from "framer-motion"
import { doParentVars } from "../assets/anim/animation"

const CanDo = () => {
  return (
    <section className="do" id="do">
      <div className="container">
        <h1 className="title">what can i do ?</h1>
        <motion.div 
          className="grid grid-cols-12 gap-6"
          variants={doParentVars}
          initial='hidden'
          whileInView='visible'
        >
        {whatCanIDo.map((canDo, i) => 
          <Do key={i} canDo={canDo} />
        )}
        </motion.div>
      </div>
    </section>

  )
}

export default CanDo