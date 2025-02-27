import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Components/Loading';
import About from './Pages/About';
import Commercial from './Pages/Commercial';
import Residential from './Pages/Residential';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import ProjectDetails from './Residential-Components/ProjectDetails';
import ProjectDetailsCom from './Commercial-Components/ProjectDetailsCom';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/commercial" element={<Commercial />} />
            <Route path="/portfolio/residential" element={<Residential />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectName" element={<ProjectDetails />} />
            <Route path="/commercial-projects/:projectName" element={<ProjectDetailsCom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
