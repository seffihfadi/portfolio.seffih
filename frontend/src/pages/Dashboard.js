import Head from "../components/parts/Head"
import { Footer } from "../components"
import NotFound from "./NotFound"

import { 
  UsersMD, 
  ProjectsMD, 
  TechnologiesMD, 
  TestimonialsMD, 
  UsersLG, 
  ProjectLikes, 
  ProjectViews, 
  ProjectsLG 
} from "../components/dashboard"

import { UsersProvider } from "../utils/context/UsersContext"
import { useEffect, useState } from "react"
import { client } from "../client"
import { adminQuery } from "../utils/serverData"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    const anoUserID = localStorage.getItem('sfp-anony-id')
    client
      .fetch(adminQuery)
      .then((admin) => {
        setIsAdmin(admin[0]._id === anoUserID)
        //if(!isAdmin) navigate('/', {replace: true})
      })
  }, [])

  if (!isAdmin) return <NotFound msg="You Haven't Permetions Go Back" />
  return (
    <UsersProvider>
      <Head />
      <div className="dashboard">
        <div className="container">
          <h1 className="title">fadi's dashboard</h1>
          <div className="grid grid-cols-5 gap-x-4">
            <div className="sm-layout">
              <ProjectLikes />
              <ProjectViews />
              <ProjectsMD />
              <UsersMD />
            </div>
            <div className="lg-layout">
              <UsersLG />
            </div>
            <div className="lg-layout">
              <ProjectsLG />
            </div>
            <div className="sm-layout">
              <TechnologiesMD />
              <TestimonialsMD />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </UsersProvider>
  )
}

export default Dashboard