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
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
