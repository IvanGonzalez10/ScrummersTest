import React, { useState } from "react";
import "./styles.scss";
import { Link } from "@reach/router";

export const BurgerButton = () => {
  const [status, setStatus] = useState("close");
  return (
    <div>
      <img
        className="burger-menu"
        src="./assets/menu.svg"
        alt="menu"
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      />
      <div className={status}>
        <div className="nav-container">
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/project">Proyecto</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/technologies">Tecnologias</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
