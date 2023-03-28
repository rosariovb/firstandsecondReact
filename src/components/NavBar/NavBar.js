import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";

const NavBar = () => {
    return (
        <nav className="Barra">
            <ul className="List-ul">
                <li>
                    <h1 style={{ color: "black" }}>Inicio</h1>
                </li>
                <li>
                    <a href="www.google.com">Productos</a>
                </li>
                <li>
                    <a href="www.google.com">Contacto</a>
                </li>
                <li>
                  <Shop />
                </li>

            </ul>
        </nav>

    );
};

export default NavBar;