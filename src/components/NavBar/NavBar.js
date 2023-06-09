import "./NavBar.css";
import Shop from "../Shop/Shop";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Barra">
      <ul className="List-ul">
        <Link className="Link" to="/">
          Inicio
        </Link>
        <Link className="Link" to="/Productos">
         Productos
        </Link>
        <Link className="Link" to="/Contacto">
         Contacto
        </Link>
        <li>
          <Shop/>
        </li>

      </ul>

    </nav>
  ) 
}


export default NavBar;