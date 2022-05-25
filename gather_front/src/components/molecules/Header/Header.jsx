import Button from "@material-ui/core/Button"
import Logo from "../../../resources/img/logo_gather.png"
import "../Header/header.css"
import style from "../../atoms/Button/buttonsStyles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
    <>
      <header>
        <div className="logo">
          <img className="img-fluid" src={Logo} alt="" />
          <h1 className="brand-name text-white">Gather</h1>
        </div>
        <div className="buscador-header">
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
        <Button className="button btn-login my-4" variant="contained" style={style}>
          log in
        </Button>
      </header>
    </>
  );
};

export default Header;
