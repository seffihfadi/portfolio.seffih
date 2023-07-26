import Touch from "./parts/Touch"
import ContactForm from "./parts/ContactForm"
import RateForm from "./parts/RateForm"
import { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'



const Contact = () => {
  const [contact, setContact] = useState(true)
  
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1 className="title">{contact ? 'contact me' : 'feedback'}</h1>
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-12 lg:col-span-6 flex items-center">
            <Touch contact={contact} setContact={setContact} />
          </div> 
            
          <div className="grid col-span-12 lg:col-span-6">
              <motion.div 
                key={contact} 
                initial={{opacity: 0, y: 30}} 
                animate={{opacity: 1, y: 0}}  
                transition={{duration: 0.5}}
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