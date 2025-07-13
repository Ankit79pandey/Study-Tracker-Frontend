import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home section">
      <div className="overlay">
        <h1 data-aos="fade-down">Hi, I'm Your Name</h1>
        <p data-aos="fade-up">Frontend Developer • React • Node.js • MongoDB</p>
      </div>
    </section>
  );
}
