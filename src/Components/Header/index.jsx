import React from "react";
import "./styles.scss";
import { Link } from "@reach/router";

export const Header = () => {
  return (
    <div className="header">
      <div className="nav-container-header">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/project">Proyecto</Link>
        </nav>
      </div>
      <div className="image-container">
        <Link to="/"><img src="./assets/logo.png" alt="Logo de Scrummers" /></Link>
      </div>
      <div className="nav-container-header">
        <nav>
          <Link to="/about">Acerca de</Link>
          <Link to="/technologies">Tecnologias</Link>
        </nav>
      </div>
    </div>
  );
};
