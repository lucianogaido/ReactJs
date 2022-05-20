import CardItem from '../Item/Item'
import {CardGroup} from "react-bootstrap"

const ItemList = ({title, products}) => {
    
    return(
        <>
        <h2>{title}</h2>
            {
                products.map( ({title, price, image, id, stock}) => {
                    return(
                        <CardGroup key={id}>
                            <CardItem title={title} price={price} image={image} stock={stock}/>
                        </CardGroup>
                    )
                })
            }
        
        </>
    )
}

export default ItemList