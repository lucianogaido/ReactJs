import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <hr/>
            <div className="mapa row footer">
            <ul className="col-lg-12 ul">
                <li className='a'><Link to="/">Inicio</Link></li>
                <li className='a'><Link to="/category/mermeladas">Mermeladas</Link></li>
                <li className='a'><Link to="/category/conservas">Conservas</Link></li>
                <li className='a'><Link to="/category/blends">Blends de Té</Link></li>
            </ul>
            </div>
        </div>
    )
}
export default Footer