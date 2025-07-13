import React from "react";
import "./Education.css";

export default function Education() {
  const edus = [
    {
      degree: "B.Sc. in Computer Science",
      institute: "XYZ University",
      period: "2020 – 2023",
      details: "Specialized in software development and algorithms."
    },
    {
      degree: "High School",
      institute: "ABC College",
      period: "2018 – 2020",
      details: "Graduated with distinction in maths and science."
    },
  ];

  return (
    <section id="education" className="section education">
      <h2 data-aos="fade-up">Education</h2>
      <div className="edu-list">
        {edus.map((e, idx) => (
          <div key={idx} className="edu-card" data-aos="fade-up" data-aos-delay={idx * 100}>
            <h3>{e.degree}</h3>
            <span>{e.institute}</span>
            <em>{e.period}</em>
            <p>{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
