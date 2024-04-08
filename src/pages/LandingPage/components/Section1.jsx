import "../styles/Section1.css"
import { SearchBar } from "./SearchBar"

export const Section1 = () => {
  return (
    <div className="section1-container">
        <div className="imagemDeFundo">
            <div className="camadaDeCor"></div>
        </div>

        <div className="section1-contentWrapper">
            <div className="container-titulo-subtitulo">
                <h1>Compre seu carro com quem é de <span className="texto-destaque">confiança</span>!</h1>
                <h3>Confira carros baratos e de ótima confiabilidade no maior estoque da cidade!</h3>
            </div>
            <div className="container-searchbar">
                <SearchBar />
            </div>
        </div>

    </div>
  )
}
