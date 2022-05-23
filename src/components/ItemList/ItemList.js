import CardItem from '../Item/Item'


const ItemList = ({products}) => {
    
    return(
        <>
            {
                products.map( ({title, price, image, id, stock}) => {
                    return(
                        <CardItem key={id} title={title} price={price} image={image} stock={stock}/>
                    )
                })
            }
        
        </>
    )
}

export default ItemList