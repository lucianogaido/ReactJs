import ItemList from '../ItemList/ItemList'
import { useEffect, useState} from 'react'
import {Row} from "react-bootstrap"
import productos from '../../data/productsMock'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])


const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}  

useEffect( () => {
    getProducts()
    .then( (response) => {
        setProducts(response)
    })
    .catch( (err) => {
    })
    .finally( () => {
    })
}, [])

    return(
        <main className="container" >
            <Row xs={1}  md={2} lg={3}>
                <ItemList products={products}/>
            </Row>
        </main>
    )
}
export default ItemListContainer