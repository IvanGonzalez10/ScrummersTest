import React from "react";
import "./styles.scss";

export const Figures = () => {
  return (
    <div className="figures-container">
      <h1>Lista de Items</h1>
      <div className='looking-container'>
        <input placeholder='Buscar...' />
      </div>
      <div className="figure-container">
        <div className="available-figures"></div>
        <div className="select-figures"></div>
      </div>
    </div>
  );
};
