import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Partners from '../components/Partners'
import Microsoft from '../components/Microsoft'
import Domains from '../components/Domains'
import Websites from '../components/WebsiteDev'
import Networking from '../components/Networking'
import Surveillance from '../components/Surveillance'
import Hardware from '../components/Hardware'
import GoToTop from '../components/GoToTop'
import Services from '../components/Services'
import Dynamics365 from '../components/Dynamics365'
import ManagedWifi from '../components/ManagedWifi'
// import Footer from '../components/Footer'

function Home() {

  return (
    <div className='relative font-poppins lg:text-base overflow-x-clip'>
    <div className='h-screen w-full bg-[#09071f] relative z-0'>
      <Navbar/>
    <HeroSection/>
    </div>
    <Partners/>
    <About/>
    <Services/>
    <Microsoft/>
    <Dynamics365/>
    <Domains/>
    <Websites/>
    <Networking/>
    <Surveillance/>
    <ManagedWifi/>
    <Hardware/>
    <GoToTop/>
    </div>
  )
}

export default Home