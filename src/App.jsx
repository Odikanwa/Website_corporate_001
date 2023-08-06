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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="partners" element={<Partners />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  )
);

export default function App() {
  return (
  <RouterProvider router={router} />  
  )
}