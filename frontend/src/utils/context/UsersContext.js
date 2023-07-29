import { useState, createContext, useEffect, useContext } from 'react'
import { client } from '../../client'

const UsersContext = createContext(null)

export const useUsers = () => {
  return useContext(UsersContext)
}

export const UsersProvider = ({ children }) => {

  const [users, setUsers] = useState(null)

  useEffect(() => {

  }, [])

  return (
    <UsersContext.Provider value={users}>
      {children}
    </UsersContext.Provider>
  )
}
