import { motion } from 'framer-motion'
import { useRef, useState, useContext } from 'react'
import { client } from '../../client'
import { v4 } from 'uuid'
import { useProjects } from '../../utils/context/ProjectsContext'

const RateForm = () => {
  const projects = useProjects()
  const jobs = ['designer', 'frontend developer', 'backend developer', 'mobile developer']
  
  const [isSending, setIsSending] = useState(false)
  const [rateFormValues, setRateFormValues] = useState({
    name: '',
    feedback: '',
    job: '',
    project: ''
  })

  const handleChange = (e) => {
    setRateFormValues({...rateFormValues, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    const jobName = jobs.includes(rateFormValues.job) ? rateFormValues.job : ''
    const projectLink 
      = Boolean(projects?.filter((pr) => pr.link === rateFormValues.project).length) 
      ? rateFormValues.project : ''
    
    const testimonialDoc = {
      _id: v4(),
      _type: 'testimonial',
      feedback: rateFormValues.feedback,
      name: rateFormValues.name,
      job: jobName,
      project: projectLink,
      pub: true
    }
    client.create(testimonialDoc).then(() => {
      e.target.reset()
      setIsSending(false)
    })
 }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6">
          <div className="form-group">
            <input 
              onChange={handleChange} 
              name="name" 
              placeholder="Name" 
              type="text"
              pattern='^(?=.{4,18}$)[a-zA-Z]+ [a-zA-Z]+$'
              required={true}
            />
            <span className='err'>name must contain two words of alphabits</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="form-group">
            <select 
              onChange={handleChange} 
              name="job" 
              required={true}
              /*value={rateFormValues.job}*/
            >
              <option value="none">Job ( optional )</option>
              {jobs.map((job, i) => 
                <option key={i} value={job}>{job}</option>
              )}
            </select>
            <span className='err'>select your job</span>
          </div>
        </div>
        <div className="col-span-12">
          <div className="form-group">
            <select 
              onChange={handleChange} 
              name="project"
              required={true}
              /*value={rateFormValues.project}*/
            >
              <option value="none">Project ( optional )</option>
              {projects && projects.map(({_id, title, pub, link}) => 
                pub && <option key={_id} value={link}>{title}</option>
              )}
            </select>
          </div>
        </div>
        <div className="col-span-12">
          <div className="form-group">
            <textarea 
              onChange={handleChange}
              className="min-h-[100px]"
              name="feedback"
              placeholder="Your Feedback (public)"
              rows={5}
              required={true}
              /*value={rateFormValues.feedback}*/
            />
            <span className='err'>you should write something</span>
          </div>
        </div>
        <div className="col-span-12">
          <div className="send flex justify-end">
            <button className="btn-primary" disabled={isSending}>{isSending ? 'Publishing...' : 'Send Feedback'}</button>
          </div>
        </div>
      </div>
  </form>
  )
}

export default RateForm