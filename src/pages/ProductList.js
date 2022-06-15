import ItemList from '../components/ItemList/ItemList';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {Row} from "react-bootstrap"
import { Spinner } from 'reactstrap';
import '../App.css'
import {collection, getDocs} from 'firebase/firestore';
import db from '../data/firebaseConfig';

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

    const getItem = async () => {
        const productSnapshot = await getDocs(collection ( db, "productos"));
        const productList = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            setLoading(false)
            return product
        })
        return productList
    }

    return(
        <>
        <h2>{category.toUpperCase()}</h2>
        {loading ?
        <Spinner color='warning' className='spinner'/>
        :
        <Row  xs={1}  md={2} lg={3} className="container">
            <ItemList  products={products}/>
        </Row>
        }
        </>
    )
}

export default  ProductList