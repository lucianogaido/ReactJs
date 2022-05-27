import { Container, Image } from "react-bootstrap"
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail =({data}) => {
    return(
        <>
        <Container className="row">
            <article className="col-xs-12 col-sm-12 col-lg-6">
                <Image className="imgDetail rounded" src={`../${data.image}`}/>
            </article>
            <aside className="col-xs-12 col-sm-12 col-lg-6">
                <h2>{data.title}</h2>
                <div>{data.description}</div>
                <p className="price">${data.price}</p>
                <ItemCount/>
            </aside>
        </Container>
        </>
    )
}
export default ItemDetail