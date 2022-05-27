import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {producto} from '../../data/productsMock'

const ItemDetailContainer =() => {
    const [product, setProduct]= useState({})

    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }  
    
    useEffect( () => {
        getItem()
        .then( (response) => {
            setProduct(response)
        })
        .catch( (err) => {
        })
        .finally( () => {
        })
    }, [])
    
    return(
        <>
        <ItemDetail data={product}/>
        </>
    )
}
export default ItemDetailContainer