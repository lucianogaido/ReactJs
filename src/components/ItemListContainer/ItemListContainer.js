import ItemList from '../ItemList/ItemList'
import { useEffect, useState} from 'react'
import {Row} from "react-bootstrap"
import { Spinner } from 'reactstrap';
import '../../App.css'
//Firestore
import {collection, getDocs} from 'firebase/firestore';
import db from '../../data/firebaseConfig';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
    }, [])

    const getProducts = async () => {
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
        <main className="container" >
            <h2>Todos Nuestros Produtos</h2>
            {loading?
            <Spinner color='warning' className='spinner'/>
            :
            <Row xs={1}  md={2} lg={3}>
                <ItemList products={products}/>
            </Row>
            }
        </main>
    )

}
export default ItemListContainer