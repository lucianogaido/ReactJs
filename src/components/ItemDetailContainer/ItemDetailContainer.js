import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../data/productsMock'
import {useParams, useNavigate} from 'react-router-dom'
import { Spinner } from 'reactstrap';
import '../../App.css'
// import {doc, getDoc} from 'firebase/firesore'

const ItemDetailContainer =() => {
    const [product, setProduct]= useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
    const navigate = useNavigate()
    
    const productFilter = productos.find((product)=>{
        return product.id === Number(id);
    })
    
    useEffect( () => {
        // getProduct()
        // .then ((prod)=>{
        //     setProduct(prod)
        // })
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
    
    // const getProduct = async () =>{
    //     const docRef = doc(dataBase, "productos", id)
    //     const docSnaptshop = await getDoc(docRef)
    //     let product= docSnaptshop.data()
    //     product.id = docSnaptshop.id
    //        return product
    //     console.log("docSnaptshop",docSnaptshop.data())
    // }

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