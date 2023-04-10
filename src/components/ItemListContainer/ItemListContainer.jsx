
import data from "../../data/stock";
import CardU from "../CardU/CardU";
import "./CardList.css";

const ItemListContainer = () => {     
    return ( data.map (i => ( <CardU user = {i.id}title ={i.titulo} img={i.imagen} 
        description={i.descripcion} $ price={i.precio}/>)))
        

  
                            
};



export default ItemListContainer;