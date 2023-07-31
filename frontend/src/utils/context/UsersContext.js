import { useState, createContext, useEffect, useContext } from 'react'
import { client } from '../../client'
import { usersQuery, testimonialQuery } from '../serverData'

const UsersContext = createContext(null)
const TestimonialsContext = createContext(null)
//const UsersFilterUpdate = createContext(null)

export const useUsers = () => {
  return useContext(UsersContext)
}
export const useTestimonials = () => {
  return useContext(TestimonialsContext)
}

export const UsersProvider = ({ children }) => {
  // const myTheme = localStorage.getItem('sfp-theme') == 'dark' ? '#fff' : '#1e293b'
  // const [theme] = useState(myTheme)
  const [testimonials, setTestimonials] = useState(null)
  
  useEffect(() => {
    client
      .fetch(testimonialQuery)
      .then((testis) => {
        setTestimonials(testis)  
      })
  }, [])


  const [users, setUsers] = useState(null)
  const [filter, setFilter] = useState('today')   // init in today
  const days = {all: 365, month: 30, week: 7, today: 1}

  useEffect(() => {
    client
      .fetch(usersQuery(days[filter]))
      .then((usrs) => {
        setUsers(usrs)
      })
    /*return () => {
      setUsers(null)
    }*/
  }, [filter])

  return (
    <UsersContext.Provider value={{users: users, setFilter: setFilter, filter: filter}}>
      <TestimonialsContext.Provider value={testimonials}>
        {children}
      </TestimonialsContext.Provider>
    </UsersContext.Provider>
  )
}
