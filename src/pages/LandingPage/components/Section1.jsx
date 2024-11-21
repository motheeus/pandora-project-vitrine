import { useContext } from "react";
import { contextInfo } from "../../../context";
import "../styles/Section1.css";
import { SearchBar } from "./SearchBar";

export const Section1 = () => {
  const { dataContext, setDataContext } = useContext(contextInfo);

  return (
    <div className="section1-container">
      <div className="imagemDeFundo">
        <div className="camadaDeCor"></div>
      </div>

      <div className="section1-contentWrapper">
        <div className="container-titulo-subtitulo">
          <h1>
            {dataContext.lp_frase_efeito}
          </h1>
          <h3>
            {dataContext.lp_frase_secundaria}
          </h3>
        </div>
        <div className="container-searchbar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
