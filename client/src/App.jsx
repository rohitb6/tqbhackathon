import React from "react";
import Hero from "./components/Hero";
import ScrollLine from "./components/Scrollline";
import About from "./components/About";
import Service from "./components/Service";
import Testimonials from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Certificate from "./components/Certificate";
import Brand from "./components/Brand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'leaflet/dist/leaflet.css';



const App = () => {
  return (
    <div className="App">
      <Hero />
      <ScrollLine/>
      <About/>
      <Service/>
      {/* <Gallery/> */}
      <Certificate/>
      {/* <Testimonials/> */}
      {/* <Contact/> */}
      
    </div>
  );
};

export default App;
