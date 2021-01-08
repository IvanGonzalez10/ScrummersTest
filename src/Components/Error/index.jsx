import React from "react";
import "./styles.scss";
import { Link } from "@reach/router";

export const Error = () => {
  return (
    <div className='error-container'>
      <h1>Scrummers</h1>
      <h2>404 Error</h2>
      <h3>La URL solicitada no existe. Por favor vuelve al Inicio.</h3>
      <Link to="/"><button>Inicio</button></Link>
    </div>
  );
};