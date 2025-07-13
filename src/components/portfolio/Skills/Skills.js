import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    // add more...
  ];

  return (
    <section id="skills" className="section">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills-grid">
        {skills.map(s => (
          <div key={s.name} className="skill-card" data-aos="zoom-in">
            <div className="icon">{s.icon}</div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
