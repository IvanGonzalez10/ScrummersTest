import React from "react";
import "./styles.scss";

export const Figures = () => {
  return (
    <div className="figures-container">
      <h1>Lista de Items</h1>
      <div className="looking-container">
        <input placeholder="Buscar..." />
        <button>Agregar item</button>
      </div>
      <div className="figure-container">
        <div className="available-figures">
          <div className="title-available-figures">
            <h1>Items disponibles</h1>
          </div>
          <div className="items-available-figures">
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Cuadrado</h2>
            </div>
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Triangulo</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Rectangulo</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Rombo</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Pentagono</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Hexagono</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Circulo</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Semicirculo</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Estrella</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Anillo</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Cruz</h2>
            </div>{" "}
            <div className="item-available">
              <img src="./assets/cuadrado.png" alt="Cuadrado" />
              <h2>Corazón</h2>
            </div>{" "}
          </div>
        </div>
        <div className="select-figures"></div>
      </div>
    </div>
  );
};
