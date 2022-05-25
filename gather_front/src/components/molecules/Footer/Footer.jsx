import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"



const Footer = () => {
  return (
    <>
      <footer>
        <div className="contenido-footer d-flex align-items-center justify-content-around row text-center">
          
            <ul className="wrapper d-flex justify-content-center redes col-md-4 mx-auto">
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
          
          <div className="copy col-md-4">
            <h4 className="text-center">
              Todos los derechos reservados &copy;
            </h4>
          </div>
          <div className="correo col-md-4">
            <span>Direccion de correo:</span>
            <p>ruben.campanario.dieguez@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
