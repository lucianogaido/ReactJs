import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'
import { Spinner } from 'reactstrap';
import '../../App.css'
import {doc, getDoc} from 'firebase/firestore'
import db from "../../data/firebaseConfig";

const ItemDetailContainer =() => {
    const [product, setProduct]= useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
    
    useEffect( () => {
        getProduct()
        .then ((response)=>{
            setProduct(response)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
    const getProduct = async () =>{
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        let product= docSnaptshop.data()
        product.id = docSnaptshop.id
        setLoading(false)
        return product
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