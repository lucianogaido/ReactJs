import { Toast } from 'react-bootstrap'
import './Toast.css'
const BoostrapToast = ({ setShowToast }) => {
    return (
        <Toast
            delay={3000} autohide
            className='toast d-inline-block'
            bg='danger'
            onClose={() => setShowToast(false)}>
            <Toast.Header className="header-toast ">
                <strong className="me-auto">Ups! No tenemos Stock suficiente</strong>
            </Toast.Header>
            <Toast.Body>Intenta con otra cantidad</Toast.Body>
        </Toast>
    );
}
export default BoostrapToast