import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="socials">
        <a href="#" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:you@example.com"><FaEnvelope /></a>
      </div>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}
