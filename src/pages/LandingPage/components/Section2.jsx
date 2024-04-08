import "../styles/Section2.css"
import { CardAnuncio } from "../../../components/CardAnuncio"

export const Section2 = () => {
  return (
    <div className="section2-container">
        <h2>Confira alguns carros anunciados!</h2>

        <div className="confiracarros">
          <CardAnuncio/>
          <CardAnuncio/>
          <CardAnuncio/>
          <CardAnuncio/>
          <CardAnuncio/>
          <CardAnuncio/>
          
        </div>
    </div>
  )
}
