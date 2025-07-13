import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaWindows,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDotnet,
  SiNextdotjs,
  SiExpress,
  SiElectron,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiDotnet />, name: ".NET Core / MVC" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiElectron />, name: "Electron.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL / SQL" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaLaptopCode />, name: "VS Code" },
  ];

  return (
    <section id="skills" className="section">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card" data-aos="zoom-in">
            <div className="icon">{s.icon}</div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
