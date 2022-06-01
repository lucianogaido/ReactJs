import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../data/productsMock'
import {useParams, useNavigate} from 'react-router-dom'

const ItemDetailContainer =() => {
    const [product, setProduct]= useState({})
    const {id} = useParams();
    const navigate = useNavigate()
    
    useEffect( () => {
        getItem()
        .then( (response) => {
            if(productFilter=== undefined){
                navigate('/Error')
            }else{
            setProduct(productFilter)
        }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productFilter)
            }, 2000)
        })
    }  
    
    
    const productFilter = productos.find((product)=>{
        return product.id === Number(id);
    })
    return(
        <>
        <ItemDetail data={product}/>
        </>
    )
}
export default ItemDetailContainer