import { heroData } from '../utils/localData'
import { TypeAnimation } from 'react-type-animation'
import Theme from "./parts/Theme"
import { motion } from 'framer-motion'
import { heroChildVars, heroParentVars } from '../assets/anim/animation'

const Hero = () => {
  const delay = 2000;
  
  return (
    <section id="biography" className="me">
      <div className="flex absolute left-0 top-0 justify-between items-center py-2 px-6 w-full z-20">
        <div className="flex justify-center items-center">
          <span className="hidden mx-2 md:block">{heroData.phone}</span>
          <span className=" mx-2">{heroData.email}</span>
        </div>
        {/*<div className="lang">
          <button active="">En</button>
          <button>Ar</button>
  </div>*/}
        <Theme />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 min-h-screen items-center">
          <motion.div variants={heroParentVars} initial='hidden' whileInView='visible' className="col-span-12 lg:col-span-7 z-10">
            <motion.span variants={heroChildVars} className="material-symbols-rounded mr-2">waving_hand</motion.span>
            <motion.span variants={heroChildVars} className="capitalize text-xl font-bold">hi, my name is :</motion.span>
            <motion.h1 variants={heroChildVars} className="capitalize text-4xl font-bold my-6">{heroData.name}</motion.h1>
            <motion.span variants={heroChildVars} className="capitalize">i'm a {''}
            <TypeAnimation
              sequence={[
                'computer science student', delay,
                'fronend developer', delay,
                'backend developer', delay,
                'ui designer', delay,
                /*'mobile developer', 1000*/
              ]}
              speed={50}
              repeat={Infinity}
            />
            </motion.span>
            <motion.p variants={heroChildVars} className="my-6 font-bold leading-7">{heroData.desc}</motion.p>
          </motion.div>
        </div>
      </div>
    </section>

  )
}

export default Hero