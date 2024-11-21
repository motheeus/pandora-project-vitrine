import "../styles/Header.css"

import { Link } from "react-router-dom"
import { contextInfo } from "../../../context";
import { useContext } from "react";

const Header = () => {
  const { dataContext, setDataContext } = useContext(contextInfo);
  
  // Scroll background change color 
  document.addEventListener('scroll', (e) => {
    const element = document.getElementById("header")
    const scrollPos = window.scrollY

    if (scrollPos > 50){
      element.classList.add("naotanotopo")
    }else {
      element.classList.remove("naotanotopo")
    }

  })

  return (
    <div className="container-header">
        <div id="header" className="header">

            <div className="logo">
                <img src={"http://localhost:8801/images/" + dataContext.logo_url} alt="" height="20" width="150"/>
            </div>

            <ul>
                <li><a href="">Contato</a></li>
                <li><Link className="destaque" to={"/estoque"}>VER ESTOQUE</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header