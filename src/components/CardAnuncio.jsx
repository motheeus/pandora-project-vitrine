import "../styles/CardAnuncio.css";
import { FaArrowRight, FaTachometerAlt } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const CardAnuncio = (data) => {
  const [imagesData, setImagesData] = useState([]);
  const navigate = useNavigate();

  const imagesMainUrl = "http://localhost:8801/images/";

  const fetchImagesById = async (id) => {
    axios
      .get("/imageRetriever/" + id)
      .then((res) => {
        setImagesData(res.data[0]);
      })
      .catch((e) => {
        try {
          console.log(e.response.data);
        } catch (e) {
          console.log("Houve um erro na requisicao da imagem");
        }
      });
  };

  useEffect(() => {
    fetchImagesById(data.data.processo_id);
  }, []);

  return (
    <div className="card-wrapper">
      <div
        style={{ backgroundImage: `url(${imagesMainUrl + imagesData.auto_images_url})` }}
        className="imagemPrincipal"
      />
      <div className="indicadorAno">
        {data.data.car_ano_modelo}/{data.data.car_ano_fabricacao}
      </div>
      <div className="embaixoFoto">
        <div className="modeloEspec">
          <p className="titulo">
            {data.data.car_marca} {data.data.car_modelo}
          </p>
          <p className="subtitulo">
            {data.data.car_motor} {data.data.car_versao}
          </p>
        </div>

        <div className="especs">
          <LuFuel />
          <p>{data.data.car_combustivel}</p>
          <IoColorPaletteOutline />
          <p>{data.data.car_cor}</p>
          <TbManualGearbox />
          <p>{data.data.car_transmissao}</p>
          <GiCarDoor />
          <p>
            {data.data.car_carroceria} ({data.data.car_portas_qtd}p)
          </p>
        </div>

        <div className="rodape">
          <div className="umdoladinhodootro">
            <div className="preco">R$ {data.data.processo_preco}</div>
            <div className="quilometragem">{data.data.car_km} km</div>
          </div>
          <div className="veranuncio" onClick={() => navigate("/carro/" + data.data.processo_id)}>
            <p>Ver Anuncio</p> <FaArrowRight />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
