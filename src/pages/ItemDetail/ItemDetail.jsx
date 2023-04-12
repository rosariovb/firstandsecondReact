
import React , { useEffect, useState } from "react";
import productos from "../../data/data";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const[producto, setProducto] = useState ();
    const {id} = useParams();
    useEffect(() => {

 setProducto( productos.find(producto => producto.id == id)) 
 
    
   

 
  
 }, [producto,id])
 

    return (
        producto ? 
        <div>
            <h2>{producto.titulo}</h2>
            <p>{producto.descripcion}</p>
        </div>
  
     :
     <p>cargando</p>
            
          
    )
};

export default ItemDetail;