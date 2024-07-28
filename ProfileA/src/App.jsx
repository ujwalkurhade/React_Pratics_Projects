import React from "react";
import "./App.css";
// import Navbar from "./Components/Navabar/Navbar";
import Home from "../Pages/Home";
import Education from "../Pages/Education";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <hr />
      <About />
      <hr />
      <Education />
      <hr />
      <Contact />
    </div>
  );
};

export default App;
