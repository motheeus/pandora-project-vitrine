import landingPageBackground from "../assets/imagem-landingpage.jpg"
import "../styles/backgroundImage.css"

function BackgroundLandingPage() {
  return (
    <div className="overflowHidden">      
        <img className="imagemFundo" src={landingPageBackground} alt="" />
    </div>
  )
}

export default BackgroundLandingPage