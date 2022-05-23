import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import {CardGroup} from "react-bootstrap"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
const productos = [
    {
        id: 1,
        title : 'Mermelada de Arandanos',
        price : 400,
        image : 'arandanos.png',
        description: "Elaboración Artesanal con frutos seleccionados de Alta Calidad. 100% NATURALES",
        stock: 5,
    },
    {
        id: 2,
        title : 'Conserva de Ajies',
        price : 500,
        image : 'ajies.png',
        description: 'Elaboración Artesanal con hortalizas  de Alta Calidad. 100% NATURALES',
        stock: 10,
    },
    {
        id: 3,
        title : 'Blend de Té',
        price : 200,
        image : 'blend1.png',
        description: 'Creados con Hebras de la más alta calidad mezcladas con frutas, hierbas, especias,flores y esencias. 100% NATURALES',
        stock: 2,
    },
]

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
            
            <CardGroup>
                <ItemList products={products}/>
            </CardGroup>
        </main>
    )
}
export default ItemListContainer