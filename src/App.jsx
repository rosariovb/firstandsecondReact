/*import React, { Component } from "react";*/
import "./App.css";
/*import "./components/CardUser/CardUser.css";*/
//  componentes 
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// react router dom 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Productos from "./pages/Productos/Productos";
import ItemDetail from "./pages/ItemDetail/ItemDetail";




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
          <Route exact path = "/detail/:id" element = {<ItemDetail />} />  
          
          </Routes>
         
          <Button>Pedilo!</Button>
        </div>
      </Router>
       
    );

  };


export default App;


