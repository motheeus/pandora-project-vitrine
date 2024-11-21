import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "../../../api/axios";
import "../styles/Carroussel.css";

export const Carroussel = (id) => {
  const [imagemSelecionada, setImagemSelecionada] = useState();
  const [imagemUrl, setImagemUrl] = useState("");
  const [imagesData, setImagesData] = useState([]);

  const imagesMainUrl = "http://localhost:8801/images/";

  const fetchImagesById = async (id) => {
    axios
      .get("/imageRetriever/" + id.id)
      .then((res) => {
        setImagesData(res.data);
        console.log(res.data);
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
    if (imagesData.length > 0) {
      setImagemUrl(imagesMainUrl + imagesData[0].auto_images_url);
  }
  }, [imagesData]);

  useEffect(() => {
    if (imagemSelecionada) {
    setImagemUrl(imagesMainUrl + imagemSelecionada.auto_images_url);
  }
  }, [imagemSelecionada]);

  useEffect(() => {
    fetchImagesById(id);
  }, []);

  return (
    <div className="galeria-container">
      <div className="imagem-display">
        <img src={imagemUrl} alt="" />
      </div>

      <div className="imagem-lista-container">
        {/*         <button className='botao-esquerda'> <FaArrowLeft/> </button>
        <button className='botao-direita'> <FaArrowRight/> </button> */}
        <div className="imagem-lista">
          {imagesData.map((item, i) => (
            <div key={i} className="imagem-imagem">
              <img
                src={imagesMainUrl + item.auto_images_url}
                alt=""
                height="80"
                width="147"
                onClick={() => {
                  setImagemSelecionada(item);
                  console.log(
                    imagesMainUrl + imagemSelecionada.auto_images_url
                  );
                  console.log(imagemUrl);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
