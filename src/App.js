import React from 'react';
import './Assets/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@splidejs/react-splide/css';
import 'aos/dist/aos.css';
import About from './Section/About';
import Services from './Section/Services';
import Testimonials from './Componant/Testimonials';
import Pricing from './Section/Pricing';
import FAQ from './Componant/FAQ';
import Team from './Section/Team';
import Contact from './Section/ContactUs';
import Footer from './Section/Footer';
import Navbar from './Componant/Navbar/Navbar';
import Home from './Section/Home';

function App() {
  return (
    <>
    
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Testimonials/>
    <Pricing/>
    <FAQ/>
    <Team/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
