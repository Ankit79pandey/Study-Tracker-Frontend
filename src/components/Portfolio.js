import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./portfolio/Navbar/Navbar";
import Home from "./portfolio/Home/Home";
import Skills from "./portfolio/Skills/Skills";
import Projects from "../components/portfolio/Projects/Projects";
import Experience from "../components/portfolio/Experience/Experience";
import Education from "../components/portfolio/Education/Education";
import Footer from "../components/portfolio/Footer/Footer";

function Portfolio() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  
  return (
    <>
      <Navbar />
      <main>
      <section id="home" data-aos="fade-up"><Home /></section>
<section id="skills" data-aos="fade-up"><Skills /></section>
<section id="projects" data-aos="fade-up"><Projects /></section>
<section id="experience" data-aos="fade-up"><Experience /></section>
<section id="education" data-aos="fade-up"><Education /></section>

      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
