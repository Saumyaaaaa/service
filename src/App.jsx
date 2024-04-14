
import Navbar from './components/Navbar'
import HeroSection from './components/Section'
import ServicesSection from './components/ServiceSection'
import TechnologyStack from './components/TechnologyStack'
import TechStackSection from './components/TechStackSection'
import HowItWorks from './components/WorkingProcess'



const App = () => {
  return (
    <div>
      <Navbar/>
     <HeroSection/>
     <ServicesSection/>
     <TechStackSection/>
     <TechnologyStack/>
     <HowItWorks/>
      
    </div>
  )
}

export default App
