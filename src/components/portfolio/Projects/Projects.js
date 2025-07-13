import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Study Tracker App",
      description: "A full-stack MERN app to track daily study activities.",
      tech: ["React", "Express", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio built with React and animated with AOS.",
      tech: ["React", "CSS", "AOS"],
      link: "#"
    },
    {
      title: "BUDEASE – Event Management",
      description: "An event creation and registration platform for sports, dance, and other events.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Freight Management System",
      description: "A centralized ASP.NET MVC platform to automate shipment, drivers, routes, and logistics.",
      tech: [".NET MVC", "SQL Server", "Entity Framework"],
      link: "#"
    },
    {
      title: "Tumble Dry – Laundry Workflow App",
      description: "Backend system for managing laundry lifecycle: intake → processing → ironing → dispatch.",
      tech: [".NET Core", "SQL Server", "REST API"],
      link: "#"
    }
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
