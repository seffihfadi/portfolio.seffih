import { heroData } from '../utils/localData'
import { TypeAnimation } from 'react-type-animation'
import Head from "./parts/Head"
import { motion } from 'framer-motion'
import { heroChildVars, heroParentVars } from '../assets/anim/animation'
import { Canvas } from '@react-three/fiber'
import RobotModel from './canvas/RobotModel'
import { Suspense } from 'react'


const Hero = () => {
  const delay = 2000;
  
  return (
    <section id="biography" className="me">
      <Head />
      <div className="container">
        <div className="grid h-screen grid-cols-12 items-start md:items-center">
          <motion.div variants={heroParentVars} initial='hidden' whileInView='visible' className="col-span-12 mt-20 md:mt-0 md:col-span-7 z-10">
            <motion.span variants={heroChildVars} className="material-symbols-rounded mr-2">waving_hand</motion.span>
            <motion.span variants={heroChildVars} className="capitalize text-xl font-bold">hi, my name is :</motion.span>
            <motion.h1 variants={heroChildVars} className="capitalize text-3xl font-bold my-6">{heroData.name}</motion.h1>
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
      <Canvas id='canva' /*shadows*/>
        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Hero