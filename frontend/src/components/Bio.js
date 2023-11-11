import { bioData } from '../utils/localData'
import { motion } from 'framer-motion'
import { bioVars } from '../assets/anim/animation'

const Bio = () => {
  const img = require('../assets/imgs/headpnged1.png')
  
  return (
    <section className="biography" >
      <div className="container">
        <div className="grid grid-cols-12 gap-0 md:gap-10 items-center justify-center">
          <div className="col-span-12 lg:col-span-4">
            <motion.div 
              initial={{x: -50}}
              whileInView={bioVars.inView}
              transition={bioVars.transition} 
              viewport={{once: true}}
              className="about"
            >
              <div className="imgin mx-auto">
                <img className="object-cover" src={img} />
              </div>
              <div className="flex justify-center items-center flex-col mt-4">
                <p className="font-bold capitalize">{bioData.job}</p>
                <h3 className="text-3xl font-bold capitalize">{bioData.info.name}</h3>
              </div>
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <motion.div 
              initial={{x: 50}}
              whileInView={bioVars.inView}
              transition={bioVars.transition} 
              viewport={{once: true}}
            >
              <h1 className="title">biography</h1>
              <p>{bioData.desc1}</p>
              <p>{bioData.desc2}</p>
              <div className="list pt-4">
                <div className="grid sm:gap-7 grid-cols-12">
                  <div className="col-span-12 sm:col-span-6">
                    <ul>
                      {Object.keys(bioData.info).map((key, i) => 
                        <li key={i}>
                          <label>{key}: </label>
                          <span>{bioData.info[key]}</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <ul>
                      {Object.keys(bioData.contact).map((key, i) => 
                        <li key={i}>
                          <label>{key}: </label>
                          <span className='normal-case'>{bioData.contact[key]}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Bio