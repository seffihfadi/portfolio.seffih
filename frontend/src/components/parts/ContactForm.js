import { motion } from 'framer-motion'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

  const [isSending, setIsSending] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true)

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      e.target.reset()
      setIsSending(false)
    })
  };
  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6">
          <div className="form-group">
            <input 
              name="user_name" 
              placeholder="Name" 
              type="text"
              required={true} 
              pattern='^(?=.{4,18}$)[a-zA-Z]+ [a-zA-Z]+$' 
            />
            <span className='err'>name must contain two words of alphabits</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="form-group">
            <input
              name="user_email"
              placeholder="Email"
              type="email"
              required={true} 
              pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$' 
            />
            <span className='err'>write a valid email</span>
          </div>
        </div>
        <div className="col-span-12">
          <div className="form-group">
            <input
              name="subject"
              placeholder="Subject"
              type="text"
              required={true}
              pattern='^[a-zA-Z0-9 ]{4,20}$' 
            />
            <span className='err'>subject musn't contain and specials 4-20 char</span>
          </div>
        </div>
        <div className="col-span-12">
          <div className="form-group">
            <textarea
              className="min-h-[100px]"
              name="message"
              placeholder="Your message"
              rows={5}
              required={true}
            />
            <span className='err'>you should write something</span>
          </div>
        </div>
        <div className="col-span-12">
          <div className="send flex justify-end">
            <button className="btn-primary" disabled={isSending}>{isSending ? 'Sending...' : 'Send Email'}</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm