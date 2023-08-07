import Home from './pages/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import About from './pages/About'
import Partners from './components/Partners';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';
import Microsoft365 from './pages/Microsoft365';
import Dynamics365 from './pages/Dynamics365';
import DomainHosting from './pages/DomainHosting';
import Surveillance from './pages/Surveillance';
import WebsiteDev from './pages/WebsiteDev';
import Lan from './pages/Lan';

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
      <Route path='websitedev' element={<WebsiteDev/>}/>
      <Route path="lan" element={<Lan />} />
      <Route path="surveillance" element={<Surveillance />} />
    </Route>
  )
);

export default function App() {
  return (
  <RouterProvider router={router} />  
  )
}