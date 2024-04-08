import logo from "/src/assets/pandora_project_logo.png"

import "../styles/Header.css"

import { Link } from "react-router-dom"

const Header = () => {
  
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
                <img src={logo} alt="" />
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