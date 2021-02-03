import ItemCount from "../components/itemcount";

const ItemListContainer = ({greeting}) => {

    return(
        <>
        <a className="h2">{greeting} </a>
        <div>
        <ItemCount/>
        </div>
        
        </>
    )
}

export default ItemListContainer;