import React from "react";
import "./Experience.css";

export default function Experience() {
  const items = [
    {
      title: "Frontend Developer Intern",
      company: "ABC Tech",
      period: "Jan 2024 – Mar 2024",
      details: "Built React components and integrated APIs."
    },
    {
      title: "Volunteer Tutor",
      company: "Local NGO",
      period: "Apr 2023 – Dec 2023",
      details: "Tutored students in maths and reasoning."
    },
    // more...
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
