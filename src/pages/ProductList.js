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
        setProduct([])
        getItem()
        .then( (response) => {
            filterByCategory(response)
            
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

    const filterByCategory = (array) =>{
        return array.map( (item) => {
            if(item.category === category){
                return setProduct(products =>[...products,item])
            }
        })
    }

    return(
        <>
        <h2>{category.toUpperCase()}</h2>
        {loading ?
        <Spinner color='warning' className='spinner'/>
        :
        <Row xs={1}  md={2} lg={3} className="container">
            <ItemList products={products}/>
        </Row>
        }
        </>
    )
}

export default  ProductList