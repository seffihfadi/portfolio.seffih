import { useState, createContext, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { client } from '../../client'

const AnonymousContext = createContext('')

export const useAnonymous = () => {
  return useContext(AnonymousContext)
}

export const AnonymousProvider = ({ children }) => {

  const [anonymousUserID, setAnonymousUserID] = useState(null)

  useEffect(() => {
    let anonymousID = localStorage.getItem('sfp-anony-id')
    // console.log(Boolean(anonymousID))
    if(!Boolean(anonymousID)){
      const newAnonymousID = uuidv4()
      localStorage.setItem('sfp-anony-id', `${newAnonymousID}`)
      const referringSite = document.referrer
      let comingFrom = 'other'
      
      if (referringSite != ''){
        comingFrom = referringSite
      } else {
        comingFrom = 'direct'
      }
      
      
      const anonymousDoc = {
        _type: 'anonymousUser',
        _id: newAnonymousID,
        comingfrom: comingFrom,
        isAdmin: false
      }
      client.create(anonymousDoc)
      anonymousID = newAnonymousID
    }
    setAnonymousUserID(anonymousID)
  }, [])


  return (
    <AnonymousContext.Provider value={anonymousUserID}>
      {children}
    </AnonymousContext.Provider>
  )
}
