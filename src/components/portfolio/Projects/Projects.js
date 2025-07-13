import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Study Tracker App",
      description: "React + Node.js project to track study logs.",
      tech: ["React", "Express", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "This current portfolio site built with React and AOS.",
      tech: ["React", "CSS", "AOS"],
      link: "#"
    },
    // add more...
  ];

  return (
    <section id="projects" className="section projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="projects-list">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card" data-aos="fade-up" data-aos-delay={idx * 100}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tech">{p.tech.join(", ")}</div>
            <a href={p.link} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
