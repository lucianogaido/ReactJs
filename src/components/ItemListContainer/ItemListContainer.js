import ItemList from '../ItemList/ItemList'
import { useEffect, useState} from 'react'
import {Row} from "react-bootstrap"
import productos from '../../data/productsMock'
import { Spinner } from 'reactstrap';
import '../../App.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            setLoading(false)
        }, 2000)
    })
}  

useEffect( () => {
    getProducts()
    .then( (response) => {
        setProducts(response)
    })
}, [])

if(loading){
    return(
        <Spinner color='warning' className='spinner'/>
    )
}
    return(
        <main className="container" >
            <Row xs={1}  md={2} lg={3}>
                <ItemList products={products}/>
            </Row>
        </main>
    )
}
export default ItemListContainer