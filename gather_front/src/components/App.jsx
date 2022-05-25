import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home/Home";
import UserInfo from "../pages/UserInfo/UserInfo";
import Register from './../pages/Register/Register'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/userInfo" element={<UserInfo/>}></Route>

      {/* Paginas de error (crea los componentes en la carpeta de páginas) */}
      <Route path="/error" element={<UserInfo/>}></Route>
      <Route path="/noAutorizado" element={<UserInfo/>}></Route>
      <Route path="*" element={<UserInfo/>}></Route>

    </Routes>
  </BrowserRouter>
)

export default App;
