import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home/Home";
import UserInfo from "../pages/UserInfo/UserInfo";
import Login from './../pages/Login/Login'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/userInfo" element={<UserInfo/>}></Route>
    </Routes>
  </BrowserRouter>
)

export default App;
