// import {useState} from 'react'
// import { useNavigate } from "react-router-dom";
import "./register.css";
// import Button from "@material-ui/core/Button";
// import style from "../../components/atoms/Button/buttonsStyles";
import Logo from "../../resources/img/logo_gather.png";
import { useState } from "react";
import ModalLoginReg from "../../components/molecules/Modal/ModalLoginReg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Register = () => {
  const [mostrarForm, setMostrarForm] = useState(false);

  // let navigate = useNavigate();
  const showForm = () => {
    setMostrarForm(!mostrarForm);
    console.log("mostrar modal" + mostrarForm);
  };

  return (
    <>
      <div className="container-register d-flex flex-column">
        <div className="container-content my-auto px-5">
          {/* <div className="div-sup col-12 d-flex justify-content-between">
            <Button
              className="button btn-login my-4"
              variant="contained"
              style={style}
              onClick={() => {
                navigate("/home");
              }}
            >
              Ir a inicio
            </Button>
          </div> */}
          <div className="div-sup col-12 d-flex">
            <h3 className="text-center w-100">Interact with our communities</h3>
          </div>
          <div className="logo-register col-md-12 mt-5">
            <div className="logo">
              <img className="img-fluid" src={Logo} alt="" />
              <h1 className="name text-white">Gather</h1>
            </div>
          </div>
          <div className="button-form col-md-12 d-flex justify-content-center mt-5">
          <div className="box" onClick={showForm}>JOIN IN</div>
          </div>
          <div className="div-sup col-12 d-flex justify-content-between">
            <ul className="wrapper align-items-center redes">
              <li className="icon linkedIn">
                <span className="tooltip">LinkedIn</span>
                <span className="sm-logo">
                  <FontAwesomeIcon icon={faLinkedinIn}/>
                </span>
              </li>
              <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <span className="sm-logo">
                <FontAwesomeIcon icon={faTwitter} />
                </span>
              </li>
              <li className="icon github">
                <span className="tooltip">Github</span>
                <span className="sm-logo">
                <FontAwesomeIcon icon={faGithub} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {mostrarForm ? (
        <ModalLoginReg
          show={mostrarForm}
          onHide={showForm}
        />
      ) : null}
    </>
  );
};

export default Register;
