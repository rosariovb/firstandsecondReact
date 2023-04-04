/*import React, { Component } from "react";*/
import "./App.css";
// importamos componentes 
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";


// react router dom 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Productos from "./pages/Productos/Productos";


const App = () => {

    return (
      <Router>
        <div className="App">

          <Header title="Malcriadas" subtitle="Glitter y Accesorios" />
          <NavBar />
         <Routes>
          <Route path = "/" element = {<Inicio />} />   
          <Route path = "/productos" element = {<Productos/>} />   
          <Route path = "/Contacto" element = {<Contacto />} />   
          
          </Routes>
        </div>
      </Router>
    );

  };


export default App;


