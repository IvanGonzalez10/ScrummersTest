import React from "react";

import "./styles.scss";

export const Brief = () => {
  return (
    <div className="brief-container">
      <h1>Scrummers</h1>
      <h2>
        En Scrummers contamos con más de 10 años de experiencia y más de 50
        productos digitales de alta calidad desarrollados por nuestro equipo.
        Nuestra metodología le permite tener el control y visibilidad total de
        su proyecto, con Scrummers deja el desarrollo de su producto en las
        mejores manos.
      </h2>
      <h1>Aumento de personal</h1>
      <h2>
        El aumento de personal de TI es un servicio diseñado para agregar
        talento adicional a su equipo con todas las cualidades de Scrummers.
        Esto permite a las empresas encontrar de inmediato la opción adecuada
        para el perfil de TI requerido, aumentando la escalabilidad y la eﬁciencia del desarrollo del proyecto de TI.
      </h2>
      <div className="brief-images-container">
        <div className="brief-image-container">
          <img src="./assets/sitdown.png" alt="Talento" />
          <h1>Top talent</h1>
          <h2>trained with our Scrum framework</h2>
        </div>

        <div className="brief-image-container">
          <img src="./assets/talk.png" alt="Habilidades" />
          <h1>Experience and Skills</h1>
          <h2>validated by Scrummers</h2>
        </div>
        <div className="brief-image-container">
          <img src="./assets/lookingfor.png" alt="Buscando" />
          <h1>Internal Continuous</h1>
          <h2>Recruitment Process</h2>
        </div>
      </div>
    </div>
  );
};
