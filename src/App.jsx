import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Logo from "../public/LogoVladisystems.png"; // ajusta la ruta si es necesario
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <img src={Logo} alt="Logo Vladisystems" className="logo" />
      <h1>Vladisystems</h1>
      <p>
        Desarrollo y Automatización | Sistemas en COBOL, Python y Web | UI/UX
        & Automatización
      </p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/vladimir-alba-964931246/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/VLADISYSTEMS" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/vladisystems" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
