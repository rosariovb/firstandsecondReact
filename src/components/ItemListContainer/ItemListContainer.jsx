
import data from "../../data/data";
import CardU from "../CardU/CardU";


const ItemListContainer = () => {     
    return ( data.map (i => ( <CardU user = {i.id}title ={i.titulo} img={i.imagen} 
        description={i.descripcion} $ price={i.precio}/>)))
        

  
                            
};



export default ItemListContainer;