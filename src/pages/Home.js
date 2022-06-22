import { Carousel, CardGroup, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'
const Home = () => {
    return (
        <>
            <header >
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../portada1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../portada2.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../desayuno.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </header>
            <main className='container'>
                <h1>Productos Artesanales</h1>
                <CardGroup >
                    <Card>
                        <Card.Img variant="top" className="card-img" src="../arandanos.png" />
                        <Card.Body>
                            <Card.Title as={Link} to='/category/mermeladas'>Mermeladas</Card.Title>
                            <Card.Text>
                                Elaboración Artesanal con frutos seleccionados de Alta Calidad. 100% NATURALES
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="card-img" src="../ajies.png" />
                        <Card.Body>
                            <Card.Title as={Link} to='/category/conservas'>Conservas</Card.Title>
                            <Card.Text>
                                Elaboración Artesanal con hortalizas  de Alta Calidad. 100% NATURALES
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="card-img" src="../blend1.png" />
                        <Card.Body>
                            <Card.Title as={Link} to='/category/blends'>Blends de Té</Card.Title>
                            <Card.Text>
                                Creados con Hebras de la más alta calidad mezcladas con frutas, hierbas, especias,flores y esencias. 100% NATURALES
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </main>
        </>
    )
}
export default Home