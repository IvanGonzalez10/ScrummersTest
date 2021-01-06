import React from "react";

import "./styles.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="nav-container-header">
        <nav>
          <a href="/">Inicio</a>
          <a href="/">Proyecto</a>
        </nav>
      </div>
      <img src="./assets/logo.png" alt="Logo de Scrummers" />
      <div className="nav-container-header">
        <nav>
          <a href="/">Acerca de</a>
          <a href="/">Tecnologias</a>
        </nav>
      </div>
    </div>
  );
};
