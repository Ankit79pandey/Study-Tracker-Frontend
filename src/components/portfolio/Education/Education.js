import React from "react";
import "./Education.css";

export default function Education() {
  const edus = [
    {
      degree: "10th Grade",
      institute: "Holy Trinity Church School, Ghaziabad",
      period: "2013 - 2014",
      details: "Completed secondary education with distinction.",
    },
    {
      degree: "12th Grade (Science Stream)",
      institute: "Sarvodaya Bal Vidyalaya, Anand Vihar, Delhi-92",
      period: "2015 - 2016",
      details: "Completed higher secondary education with science stream subjects.",
    },
    {
      degree: "B.Sc. in Physics, Chemistry, and Mathematics",
      institute: "L.R. P.G. College, Sahibabad, Ghaziabad",
      period: "2017 - 2020",
      details: "Studied core science subjects with a strong foundation in analytical reasoning.",
    },
    {
      degree: "M.C.A. (Master of Computer Applications)",
      institute: "ABES Engineering College, Ghaziabad",
      period: "2020 - 2022",
      details: "Focused on advanced software development, databases, and system architecture.",
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
