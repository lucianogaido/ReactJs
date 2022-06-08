import ItemList from '../components/ItemList/ItemList';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import productos from '../data/productsMock'
import {Row} from "react-bootstrap"
import { Spinner } from 'reactstrap';
import '../App.css'

const ProductList = () => {
    const [products, setProduct]= useState([])
    const {category} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        setLoading(true)
        setProduct([])
        getItem()
        .then( (response) => {
            const productsByCategory = response.filter ((item)=> item.category ===category)
            setProduct(productsByCategory)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                setLoading(false)
                resolve(productos)
            }, 2000)
        })
    }  

    return(
        <>
        <h2>{category.toUpperCase()}</h2>
        {loading ?
        <Spinner color='warning' className='spinner'/>
        :
        <Row  xs={1}  md={2} lg={3} className="container">
            <ItemList key={productos.id} products={products}/>
        </Row>
        }
        </>
    )
}

export default  ProductList