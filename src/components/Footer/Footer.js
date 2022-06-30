import { Link } from 'react-router-dom'
import {FaWhatsapp, FaMapMarkerAlt, FaFacebookF , FaInstagram} from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="mapa row footer">
                <ul className="col-lg-12 ul">
                    <li className='a'><Link to="/">Inicio</Link></li>
                    <li className='a'><Link to="/category/mermeladas">Mermeladas</Link></li>
                    <li className='a'><Link to="/category/conservas">Conservas</Link></li>
                    <li className='a'><Link to="/category/blends">Blends de Té</Link></li>
                </ul>
                <div className="col-lg-12">
                    <Button variant='' className='btn-ig'><a href="https://www.instagram.com/" target="_blank" ><FaInstagram/></a></Button>
                    <Button variant='' className='btn-fb'><a href="https://es-la.facebook.com/" target="_blank" ><FaFacebookF/></a></Button>
                    <Button variant='' className='btn-map'><a href="https://goo.gl/maps/V41BhmcypzfsoWwV9" target="_blank" ><FaMapMarkerAlt/></a></Button>
                    <a href="https://web.whatsapp.com/" className='btn-whatsapp' target="_blank"><FaWhatsapp className=''/></a>
                </div>
            </div>
        </div>
    )
}
export default Footer