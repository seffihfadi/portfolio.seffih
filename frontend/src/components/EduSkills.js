import { useState, useEffect } from 'react'
import Coming from './parts/Coming'
import Learned from './parts/Learned'
import Education from './parts/Education'

import { technologyQuery, educationQuery } from '../utils/serverData'
import { client } from '../client'

const EduSkills = () => {
  const [isLearned, setIsLearned] = useState(true)
  const [skills, setSkills] = useState(null)
  const [coming, setComing] = useState(null)
  const [educations, setEducations] = useState(null)

  useEffect(() => {
    client
      .fetch(technologyQuery)
      .then((technologies) => {
        
        const { skillsArr, comingArr } = technologies.reduce(
          (acc, technology) => {
            if (technology.percentage >= 75) {
              acc.skillsArr.push(technology);
            } else {
              acc.comingArr.push(technology);
            }
            return acc;
          },
          { skillsArr: [], comingArr: [] }
        );
        setSkills(skillsArr)
        setComing(comingArr)
      })
    
    client
      .fetch(educationQuery)
      .then((educations) => {
        setEducations(educations)
      })
  }, [])



  return (
    <section className="skills" id="education">
      <div className="container">
        <h1 className="title">education &amp; skills</h1>
        <div className="grid grid-cols-12 gap-7">
          <Education educations={educations} />
          <div className="col-span-12 lg:col-span-8">
            <div className="flex justify-between items-center">
              <h2 className="capitalize text-3xl py-5">{isLearned ? 'skills' : 'coming'}</h2>
              <button className='btn-switch' onClick={() => { setIsLearned(!isLearned)} }>
                <span className="material-symbols-rounded rotate-90 mr-2">unfold_more</span>  
                {isLearned ? 'coming' : 'skills'}
              </button>
            </div>
            {isLearned ? <Learned skills={skills} /> : <Coming coming={coming} /> }
          </div>
        </div>
      </div>
    </section>

  )
}

export default EduSkills