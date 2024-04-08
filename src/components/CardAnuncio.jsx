import "../styles/CardAnuncio.css"
import placeholderCarro from "../assets/placeholder.jpg"
import { FaArrowRight, FaTachometerAlt } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";


export const CardAnuncio = () => {
  return (
    <div className="card-wrapper">
        <div style={{backgroundImage: `url(${placeholderCarro})`}} className="imagemPrincipal" />
        <div className="indicadorAno">2021/2021</div>
        <div className="embaixoFoto">
            <div className="modeloEspec">
                <p className="titulo">HONDA CIVIC</p>
                <p className="subtitulo">2.0 16v FLEXONE EXL</p>
            </div>

            <div className="especs">
                <LuFuel />
                <p>Gas/Alcool</p>
                <IoColorPaletteOutline/>
                <p>Branco</p> 
                <TbManualGearbox />
                <p>Automático</p>
                <GiCarDoor />
                <p>Sedã (4p)</p>

            </div>

            <div className="rodape">
                <div className="umdoladinhodootro">
                    <div className="preco">R$ 121.000</div>
                    <div className="quilometragem">240.643 km</div>
                </div>
                <div className="veranuncio"><p>Ver Anuncio</p> <FaArrowRight/> </div>
            </div>
        </div>

    </div>
  )
}
