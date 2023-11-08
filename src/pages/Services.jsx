import Microsoft from "../components/Microsoft";
import Domains from "../components/Domains";
import Surveillance from "../components/Surveillance";
import WebsiteDev from "../components/WebsiteDev";
import Networking from "../components/Networking";
import Hardware from "../components/Hardware";
import Dynamics365 from "../components/Dynamics365";
import ManagedWifi from "../components/ManagedWifi";
import { bg } from "../assets";
import Solutions from "../components/Services";

const Services = () => {
  return (
    <>
    <div className="h-auto w-[100vw]">
    <img
        src={bg}
        alt="herosection image"
        className="h-[35vh] w-[100%] object-cover opacity-50"
      />
      <Solutions/>
    </div>
    <Domains/>
    <WebsiteDev/>
    <Networking/>
    <Surveillance/>
    <Microsoft/>
    <Dynamics365/>
    <ManagedWifi/>
    <Hardware/>
    </>
  )
}

export default Services;