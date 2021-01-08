import React from "react";
import "./styles.scss";

export const Tech = () => {
  return (
    <div className="tech-container">
      <h1>Objetivo Principal</h1>
      <h2>
        Soy ingeniero mecatrónico apasionado por el desarrollo de software. Mi
        objetivo es hacer todo lo posible ayudado de mis conocimientos para
        encontrar las mejores soluciones e idealizar nuevas funcionalidades que
        se necesiten desarrollar en los proyectos de Scrummers.
      </h2>
      <h1>Tecnologias utilizadas</h1>
      <h2>Las tecnologías con las que trabajé en este proyecto fueron:</h2>
      <div className="info-container">
        <div className="tech-info-container">
          <img src="./assets/react.svg" alt="react" id="about" />
          <h1> React </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/HTML.svg" alt="HTML" />
          <h1> HTML </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/CSS.svg" alt="CSS" />
          <h1> CSS </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/js.svg" alt="JavaScript" />
          <h1> JS </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/github.svg" alt="JavaScript" />
          <h1> Github </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/git.svg" alt="JavaScript" />
          <h1> Git </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/cypress.svg" alt="JavaScript" />
          <h1> Cypress </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/vercel.svg" alt="JavaScript" />
          <h1> Vercel </h1>
        </div>
        <div className="tech-info-container">
          <img src="./assets/visual.svg" alt="JavaScript" />
          <h1> VSC </h1>
        </div>
      </div>
    </div>
  );
};
