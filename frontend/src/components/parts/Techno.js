import { motion } from 'framer-motion'

const Techno = ({ technos }) => {
  return (
    <div className="tech flex">
      {technos.map((techno) => 
        <motion.img 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: .9}} 
          key={techno.name} 
          src={techno.logo.asset.url} 
          alt={techno.name}  
        />
      )}
    </div>
  )
}

export default Techno