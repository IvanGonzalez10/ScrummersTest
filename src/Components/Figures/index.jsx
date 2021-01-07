import React from "react";
import "./styles.scss";

const allData = [
  {
    name: "Cuadrado",
    figure: "./assets/cuadrado.svg",
  },
  {
    name: "Triangulo",
    figure: "./assets/Triangulo.svg",
  },
  {
    name: "Rectagulo",
    figure: "./assets/rectangulo.svg",
  },
  {
    name: "Rombo",
    figure: "./assets/rombo.svg",
  },
  {
    name: "Pentagono",
    figure: "./assets/pentagono.svg",
  },
  {
    name: "Hexagono",
    figure: "./assets/hexagono.svg",
  },
  {
    name: "Circulo",
    figure: "./assets/circulo.svg",
  },
  {
    name: "Semicirculo",
    figure: "./assets/semicirculo.svg",
  },
  {
    name: "Anillo",
    figure: "./assets/anillo.svg",
  },
  {
    name: "Elipse",
    figure: "./assets/elipse.svg",
  },
  {
    name: "Estrella",
    figure: "./assets/estrella.svg",
  },
  {
    name: "Cruz",
    figure: "./assets/cruz.svg",
  },
];

export const Figures = () => {
  const [activeData, setActiveData] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [allNewData, setAllNewData] = React.useState([]);
  const maxData = allData.length;

  const addItem = () => {
    setAllNewData((oldArray) => [...oldArray, allData[activeData]]);
  };

  const nextItem = () => {
    if (activeData + 1 >= allData.length) setActiveData(0);
    else setActiveData((itemsActiveData) => itemsActiveData + 1);
  };

  const backItem = () => {
    /* setActiveData((itemsActiveData) => itemsActiveData - 1); */
    if (activeData - 1 <= 0) setActiveData(allData.length - 1);
    else setActiveData((itemsActiveData) => itemsActiveData - 1);
  };

  const removeItem = (i) => {
    allNewData.pull(allData[activeData]);
  };

  const reloadItem = (data) => {
    setActiveData(data);
  };

  console.log(allNewData);
  return (
    <div className="figures-container">
      <h1>Lista de Items</h1>
      <div className="looking-container">
        <input
          placeholder={"Buscar... Ej: " + allData[activeData].name}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(setQuery(e.target.value));
          }}
        />
        <div className="model-container">
          <h1>Modelo item</h1>
          <div className="model-figure">
            <button onClick={backItem}>←</button>
            <img
              src={allData[activeData].figure}
              alt={allData[activeData].name}
            />
            <button onClick={nextItem}>→</button>
          </div>
          <h2>{allData[activeData].name}</h2>
        </div>
        <button onClick={addItem}>Agregar item</button>
      </div>
      <div className="figure-container">
        <div className="available-figures">
          <div className="title-available-figures">
            <h1>Items disponibles</h1>
          </div>
          <div className="items-available-figures">
            {allData.map((data, i) => (
              <div className="item-available" key={i}>
                <img src={data.figure} alt={data.name} />
                <h2>{data.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="select-figures">
          <div className="title-select-figures">
            <h1>Items agregados</h1>
          </div>
          <div className="added-figures">
            <div className="new-added-figure">
              {allNewData.map((data, i) => (
                <div className="item-available" key={i}>
                  <img src={data.figure} alt={data.name} />
                  <h2>{data.name}</h2>
                  <button onClick={() => removeItem(i)}>X</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
