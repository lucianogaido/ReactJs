import ItemList from '../ItemList/ItemList'
import { useEffect, useState} from 'react'
import {CardGroup} from "react-bootstrap"
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

// useEffect( () => {
//     fetch('')
//     .then( (response) => {
//         return response.json()
//     })
//     .then( (res) => {
//         console.log("respuesta", res)
//     })
//     .finally( () => {
//     })
// }, [])



    return(
        <main className="container" >
            
            <CardGroup>
                <ItemList products={products}/>
            </CardGroup>
        </main>
    )
}
export default ItemListContainer