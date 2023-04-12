import React , { useEffect, useState } from "react";
import productos from "../../data/data";
import CardUser from "../CardUser/CardUser";



const ItemListContainer = () => {     
    const[data, setData] = useState ([]);

    useEffect (() => {
    setTimeout (() => {
        setData(productos)

    }, 2000 )
               

 }, [] );
    
    
    return (
        <div>
           
            {data.map(producto => (
        
            <div key={producto.id}>
                <CardUser id={producto.id} title={producto.titulo} img={producto.imagen}
                description={producto.descripcion} price={producto.precio}/>
            </div>
        ) ) 
            
            };
        </div>
    );

};


export default ItemListContainer;