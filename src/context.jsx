import { createContext, useEffect, useState } from "react";
import axios from "./api/axios.js";

export const contextInfo = createContext();

const InfoProvider = ({ children }) => {
  const initialState = {
    nome_revenda: "Carregando",
    cor_detalhe: "#000",
    lp_frase_efeito: "Carregando",
    lp_frase_secundaria: "Carregando",
    revenda_endereco: "Carregando",
  };

  const [dataContext, setDataContext] = useState(initialState);

  const getInfo = () => {
    axios
      .get("/revendaData")
      .then((res) => {
        setDataContext(res.data[0]);
        document.querySelector(':root').style.setProperty('--primary-color', res.data[0].cor_detalhe)
        console.log(res.data[0]);
      })
      .catch((e) => {
        try {
          console.log(e);
        } catch (e) {
          console.log(e);
        }
      });
  };

  useEffect(() => {
    getInfo();
    console.log(dataContext)
  }, []);

  return (
    <contextInfo.Provider value={{ dataContext, setDataContext }}>{children}</contextInfo.Provider>
  );
};

export default InfoProvider;
