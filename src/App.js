import React, {Component} from "react";
import "./App.css";
// importamos componentes 
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardU from "./components/CardU/CardU";
import Button from "./components/Button/Button";



class App extends Component {
  render () {
     return(
      <div className="App">

        <CardU />
        <NavBar/>
        <Header title ="Malcriadas" subtitle ="Glitter y Accesorios"/>

        <div className="UserSection">
      
          <CardU
            name="Glitter en gel"
            date="Desde 2018 en el mercado"
            description="Ideal para fiestas"
            img="./components/Imagen/img1"
          />
          <CardU
            name="Glitter en gel"
            date="Desde 2018 en el mercado"
            description="Ideal para fiestas"
            img="./components/Imagen/img2"
            
          />
          
        </div>
        <Button>Pedilo!</Button>

       
      </div>
 
     );

  }
}

export default App;


