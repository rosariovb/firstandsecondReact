import React from "react";
import CardU from "../CardU/CardU";
import {Link} from "react-router-dom";

const ItemDetail = () => {
    return (
    <div className="Productos">
            <h1>ItemDetail </h1>
            <div>
                <Link to="/detail/:id">
                 
                <CardU
                id= "1"
                titulo= "Glitter en gel"
                descripcion= "Ideal para cualquier tipo de evento evento"
                imagen= "assets/img/violet.jpg"
                precio= "600"
                />
                </Link>
            </div>

            
        </div>
)
};

export default ItemDetail;