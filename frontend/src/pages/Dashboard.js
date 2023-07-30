import Head from "../components/parts/Head"
import { Footer } from "../components"
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

const Dashboard = () => {
  const theme = localStorage.getItem('sfp-theme')

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