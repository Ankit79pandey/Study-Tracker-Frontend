import React from "react";
import "./Experience.css";

export default function Experience() {
  const items = [
    {
      title: "Full Stack Developer",
      company: "Saitec International Computer Consultant",
      period: "2023 – Present",
      details:
        "Worked on multiple cross-platform applications using Next.js, Node.js, Express.js, Electron, and React. Gained hands-on experience with GitHub, Bitbucket, HTML/CSS, and API development. Delivered production-ready solutions with effective collaboration and version control."
    },
    {
      title: "Frontend Developer Intern",
      company: "ABC Tech - Project Astropie",
      period: "Jan 2024 – Mar 2024",
      details:
        "Worked on a full-stack project 'Astropie' with React frontend and Express backend. Built reusable components and integrated RESTful APIs."
    },
    {
      title: "Project Developer (Freelance)",
      company: "Personal Projects",
      period: "Mar 2022 – Jun 2022",
      details:
        "Developed two complete applications: a News App using public news APIs, and a Weather Forecast App using OpenWeatherMap API. Focused on responsive UI and API integration."
    },
    {
      title: "Software Engineer",
      company: "Independent / Freelance",
      period: "2021 – 2023",
      details:
        "2 years of hands-on experience building enterprise applications using C#, .NET MVC, .NET Core, JavaScript, CSS, and HTML."
    },
    {
      title: "Volunteer Tutor",
      company: "Local NGO",
      period: "Apr 2023 – Dec 2023",
      details:
        "Tutored students in Mathematics and Logical Reasoning for government exam preparation."
    }
  ];
  
  return (
    <section id="experience" className="section experience">
      <h2 data-aos="fade-up">Experience</h2>
      <div className="timeline">
        {items.map((it, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? "" : "reverse"}`} data-aos="fade-left">
            <div className="content">
              <h3>{it.title}</h3>
              <span>{it.company}</span>
              <p><em>{it.period}</em></p>
              <p>{it.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
