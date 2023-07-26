import { useState, useEffect } from 'react'
import Home from './pages/Home'
import { v4 as uuidv4 } from 'uuid'
import { client } from './client'
import { UserContext } from './utils/contextApi'

const App = () => {

  const [anonymousUserID, setAnonymousUserID] = useState(null)

  useEffect(() => {
    let anonymousID = localStorage.getItem('sfp-ano-id')
    // console.log(Boolean(anonymousID))
    if(!Boolean(anonymousID)){
      const newAnonymousID = uuidv4()
      localStorage.setItem('sfp-ano-id', `${newAnonymousID}`)
      const anonymousDoc = {
        _type: 'anonymousUser',
        _id: newAnonymousID,
        id: newAnonymousID
      }
      client.create(anonymousDoc)

      anonymousID = newAnonymousID
    }
    setAnonymousUserID(anonymousID)
  }, [])


 

  return (
    <UserContext.Provider value={anonymousUserID}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
