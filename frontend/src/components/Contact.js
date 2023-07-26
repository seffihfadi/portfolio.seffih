import Touch from "./parts/Touch"
import ContactForm from "./parts/ContactForm"
import RateForm from "./parts/RateForm"
import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [contact, setContact] = useState(true)
  
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1 className="title">{contact ? 'contact me' : 'feedback'}</h1>
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-12 lg:col-span-6">
            <motion.div 
              key={contact}
              initial={{x: -50, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{stiffness: 150, type: 'spring'}}
            >
              <Touch contact={contact} setContact={setContact} />
            </motion.div>
          </div> 
            
          <div className="grid col-span-12 lg:col-span-6">
              <motion.div 
                key={contact} 
                initial={{opacity: 0, y: 50}} 
                whileInView={{opacity: 1, y: 0}}  
                transition={{stiffness: 150, type: 'spring'}}
              >
                {contact ? <ContactForm /> : <RateForm />}
              </motion.div>
          </div>
         
        </div>
      </div>
    </section>
    
  )
}

export default Contact