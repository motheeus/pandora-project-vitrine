import logo from "/src/assets/pandora_project_logo.png"

import "../styles/Header.css"
import SearchBarHeader from "./SearchBarHeader"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { contextInfo } from "../../../context"

const Header = () => {
  const { dataContext, setDataContext } = useContext(contextInfo);

  return (
    <div className="container-header-searchpage">
        <div className="header-searchpage">

            <div className="logo">
                <Link to="/"><img src={"http://localhost:8801/images/" + dataContext.logo_url} alt="" /></Link>
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