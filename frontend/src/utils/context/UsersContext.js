import { useState, createContext, useEffect, useContext } from 'react'
import { client } from '../../client'
import { usersQuery } from '../serverData'

const UsersContext = createContext(null)
const ThemeContext = createContext()
//const UsersFilterUpdate = createContext(null)

export const useUsers = () => {
  return useContext(UsersContext)
}
export const useTheme = () => {
  return useContext(ThemeContext)
}

export const UsersProvider = ({ children }) => {
  const myTheme = localStorage.getItem('sfp-theme') == 'dark' ? '#1e293b' : '#fff'
  const [theme] = useState(myTheme)

  const [users, setUsers] = useState(null)
  const [filter, setFilter] = useState('today')   // init in one year
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
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </UsersContext.Provider>
  )
}
