
import data from "../../data/productos";
import CardU from "../CardU/CardU";

const ItemListContainer = () => {
    return data.map(i => ( <CardU img={i.imagen} description={i.descripcion}/>))
}



export default ItemListContainer;