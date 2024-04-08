import logo from "/src/assets/pandora_project_logo.png"

import "../styles/Header.css"
import SearchBarHeader from "./SearchBarHeader"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="container-header-searchpage">
        <div className="header-searchpage">

            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>

            <SearchBarHeader/>

            <ul>
                <li><a href="">Contato</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header