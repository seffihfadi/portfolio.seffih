import { heroData } from '../utils/localData'
import { TypeAnimation } from 'react-type-animation'
import Head from "./parts/Head"
import { motion } from 'framer-motion'
import { heroChildVars, heroParentVars } from '../assets/anim/animation'
import { Canvas } from '@react-three/fiber'
import RobotModel from './canvas/RobotModel'
import { Suspense, useState } from 'react'


const Hero = () => {
  const delay = 2000;

  const [active, setActive] = useState(false);

  // Function to handle mouse enter
  const handleMouseEnter = () => {
    setActive(true);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setActive(false);
  };
  
  return (
    <section 
      id="biography" 
      className="me"
      
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Head />
      <div 
        className="container"
      >
        <div className="grid h-screen grid-cols-12 items-start md:items-center">
          <motion.div variants={heroParentVars} initial='hidden' whileInView='visible' className="col-span-12 mt-20 md:mt-0 md:col-span-7 z-10">
            <motion.div className='flex flex-wrap gap-4 my-3' variants={heroChildVars}>
              <div className="flex items-center rounded-full py-2 px-4 w-fit bg-[#836a51]">
                <span className="material-symbols-rounded text-[20px] mr-4">waving_hand</span>
                <span variants={heroChildVars} className='font-semibold'>Hi, I am :</span>
              </div>
              <span variants={heroChildVars} className="capitalize text-3xl md:text-4xl lg:text-5xl">{heroData.name}</span>
            </motion.div>
            <motion.span variants={heroChildVars} className="modi text-3xl md:text-4xl lg:text-5xl">I'm a {''}
            <TypeAnimation
              sequence={[
                'Computer engineering student.', delay,
                'Frontend developer.', delay,
                'Backend developer.', delay,
                'Ui designer.', delay,
                /*'mobile developer', 1000*/
              ]}
              speed={30}
              repeat={Infinity}
            />
            </motion.span>
            
            {/* <motion.p variants={heroChildVars} className="my-6 leading-7 text-lg">{heroData.desc}</motion.p> */}
          </motion.div>
        </div>
      </div>
      <Canvas id='canva' /*shadows*/>
        <Suspense fallback={'loading'}>
          <RobotModel active={active} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Hero