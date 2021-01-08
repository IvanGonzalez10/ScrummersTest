import React from "react";
import "./Styles/GlobalStyles.scss";
import { Header } from "./Components/Header/index";
import { Footer } from "./Components/Footer/index";
import { Home } from "./Pages/Home/Home";
import { Project } from "./Pages/Project/Project";
import { About } from "./Pages/About/About";
import { Technologies } from "./Pages/Technologies/Technologies";
import { NotFound } from './Pages/NotFound/NotFound';

import { Router } from "@reach/router";

export const App = () => (
  <>
    <Header />
    <Router>
      <NotFound default />
      <Home path='/' />
      <Project path='/project' />
      <About path='/about' />
      <Technologies path='/technologies' />
    </Router>
    <Footer />
  </>
);
