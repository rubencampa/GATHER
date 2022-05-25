import { Modal } from "react-bootstrap";
// import { Button } from "@material-ui/core";
// import { Logo } from '../../../resources/img/'
import { useNavigate } from "react-router-dom";
import './modalLoginReg.css'

const ModalLoginReg = (props) => {
  let navigate = useNavigate();
  return (
    <div className="containerModal">
      <Modal
      {...props}
      className="modal"
      size="md"
      aria-labelledby="contained-modal-title-vcenter modal-sm"
      centered
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Registro / Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-modal">
          <div className="brand-logo"></div>
          <div className="brand-title text-center">Gather</div>
          <div className="inputs mx-5">
            <label>EMAIL</label>
            <input type="email" placeholder="correo@mail.com" />
            <label>PASSWORD</label>
            <input type="password" placeholder="Mínimo 6 caracteres" />
            <button type="submit"  onClick={() => {
                navigate("/home");
              }}>LOGIN</button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default ModalLoginReg;
