import {Button, Modal} from 'react-bootstrap'

const Contact = ({children, handleClose, handleShow, show, title}) => {
    return (
      <>
        <Button className='cart-btn btn btn-outline-dark my-2 my-sm-0 bg-warning' onClick={handleShow}>
          Finalizar la Compra
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Contact