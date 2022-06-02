import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../data/productsMock'
import {useParams, useNavigate} from 'react-router-dom'
import { Spinner } from 'reactstrap';
import '../../App.css'

const ItemDetailContainer =() => {
    const [product, setProduct]= useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
    const navigate = useNavigate()
    
    const productFilter = productos.find((product)=>{
        return product.id === Number(id);
    })
    
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
                setLoading(false)
            }, 2000)
        })
    }  
    
    
    return(
        <>
        <h2>Detalle del Producto</h2>
        {loading ?
        <Spinner color='warning' className='spinner'/>
        :
        <ItemDetail data={product}/>
        }
        </>
    )
}
export default ItemDetailContainer