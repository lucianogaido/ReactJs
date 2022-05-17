import CardItem from '../Card/Card'
import {CardGroup} from "react-bootstrap"

const CardList = () => {
    return(
        <main className="container" >
            <h3>Nuestros Productos</h3>
            <CardGroup>
                <CardItem title={"Mermeladas"} image={"./arandanos.png"} text={"Elaboración Artesanal con frutos seleccionados de Alta Calidad. 100% NATURALES"} />
                <CardItem title={"Conservas"} image={"./ajies.png"} text={"Elaboración Artesanal con hortalizas  de Alta Calidad. 100% NATURALES"} />
                <CardItem title={"Blends de Té"} image={"./blend1.png"} text={"Creados con Hebras de la más alta calidad mezcladas con frutas, hierbas, especias,flores y esencias. 100% NATURALES"}/>
            </CardGroup>
        </main>
    )
}
export default CardList