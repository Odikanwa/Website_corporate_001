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
// import Footer from '../components/Footer'

function Home() {

  return (
    <div className='relative font-poppins lg:text-base overflow-x-clip'>
    <div className='h-screen w-full bg-[#09071f] relative z-0'>
      <Navbar/>
    <HeroSection/>
    </div>
    {/* <About/> */}
    <Partners/>
    <About/>
    <Microsoft/>
    <Domains/>
    <Websites/>
    <Networking/>
    <Surveillance/>
    <Hardware/>
    <GoToTop/>
    {/* <Footer/> */}
    </div>
  )
}

export default Home