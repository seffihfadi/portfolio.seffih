import { 
  Navbar,
  Footer, 
  Hero, 
  Bio, 
  EduSkills, 
  CanDo, 
  Portfolio, 
  Testimonials, 
  Contact 
} from "../components"
import { AnonymousProvider } from "../utils/context/AnonymousContext"

const Home = () => {


  return (
    <AnonymousProvider>
      <Navbar />
      <main className="relative">
        <Hero />
        <Bio />
        <EduSkills />
        <CanDo />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </AnonymousProvider>
  )
}

export default Home