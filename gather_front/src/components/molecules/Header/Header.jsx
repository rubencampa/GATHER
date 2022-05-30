import Button from "@material-ui/core/Button"
import Logo from "../../../resources/img/logo_gather.png"
import "../Header/header.css"
import style from "../../atoms/Button/buttonsStyles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useLocation,useNavigate } from "react-router-dom"
import { useState } from "react"
import Pfp from '../../../resources/img/user_img.png'
const Header = () => {
  const navigate = useNavigate()
  const usuario = useLocation();
  const [usuarioActual] = useState(usuario)
  // const [usuarioAutorizado,setUsuarioAutorizado] = useState(false) 
  // useEffect(() => {
  //   if (usuarioActual.state == null) {
  //     navigate('/regsiter')
  //   }
  // }, [usuarioActual.state])
  
    return (
    <>
      <header className="row">
        <div className="logo col-md-4">
          <img className="img-fluid pe-3" src={Logo} alt="" />
          <h1 className="brand-name text-white">Gather</h1>
        </div>
        <div className="buscador-header col-5 my-sm-5 my-md-0 col-md-4">
          <div className="searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="userData col-md-4 row justify-content-center">
        {usuarioActual.state != null? (<>
          <div className="nombreUsuario text-white text-center w-75">
            <img className='img-fluid' src={Pfp} alt="" />
            {usuarioActual.state?.username}
          </div>
            <Button className="button btn-login my-4 me-2 col-4" variant="contained" onClick={() => navigate('/register')} style={style}>
            Crear post
          </Button>
          </>) : navigate('/register')}
          <Button className="button btn-login my-4 col-4" variant="contained" onClick={() => navigate('/register')} style={style}>
            Salir
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
