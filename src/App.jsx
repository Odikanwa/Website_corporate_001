import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Microsoft365 from "./pages/Microsoft365";
import Dynamics365 from "./pages/Dynamics365";
import DomainHosting from "./pages/DomainHosting";
import Surveillance from "./pages/Surveillance";
import WebsiteDev from "./pages/WebsiteDev";
import Lan from "./pages/Lan";
import { Helmet } from "react-helmet";
import Services from "./pages/Services";
import ManagedWifiPage from "./pages/ManagedWifi";
import SignIn from "./pages/auth/Sign_in/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="partners" element={<Partners />} />
      <Route path="projects" element={<Projects />} />
      <Route path="microsoft365" element={<Microsoft365 />} />
      <Route path="dynamics365" element={<Dynamics365 />} />
      <Route path="domainhosting" element={<DomainHosting />} />
      <Route path="websitedev" element={<WebsiteDev />} />
      <Route path="lan" element={<Lan />} />
      <Route path="managedwifi" element={<ManagedWifiPage />} />
      <Route path="services" element={<Services />} />
      <Route path="surveillance" element={<Surveillance />} />
      <Route path="signin" element={<SignIn/>}/>
    </Route>
  )
);

export default function App() {
  <Helmet>
    <meta charSet="utf-8" />
    <title>Oreegi Technologies</title>
    <link rel="canonical" href="http://oreegi.com" />
    <meta name="description" content="In today's dynamic and interconnected
    world, businesses and individuals alike rely heavily on technology to drive
    efficiency, innovation, and growth. Amidst this technological revolution,
    Oreegi emerges as a powerful solution to cater to diverse technological
    needs under a unified roof." />
    <meta name="keywords" content="Oreegi, Origin, Oreegi technology, Oreegi Technologies, Microsoft 365, Office Networks, Domain Hosting, Website Templates, Hosting, Custom Websites, Surveillance Sytems" />
    <meta name="author" content="Oreegi Technologies" />
    <meta property="og:title" content="Oreegi Technologies" />
    <meta
      property="og:description"
      content="In today's dynamic and interconnected
      world, businesses and individuals alike rely heavily on technology to drive
      efficiency, innovation, and growth. Amidst this technological revolution,
      Oreegi emerges as a powerful solution to cater to diverse technological
      needs under a unified roof."
    />
    <meta property="og:url" content="http://oreegi.com" />
  </Helmet>;
  return <RouterProvider router={router} />;
}
