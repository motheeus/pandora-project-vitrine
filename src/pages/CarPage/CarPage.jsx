import { useContext, useEffect, useState } from "react";
import Header from "../SearchPage/components/Header";
import { Carroussel } from "./components/Carroussel";
import "./styles/CarPage.css";
import {
  FaWhatsapp,
  FaTachometerAlt,
  FaCalendar,
  FaCarSide,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { GoShare } from "react-icons/go";
import { MdInfoOutline, MdCreditCard } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import { TbSteeringWheel } from "react-icons/tb";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import { contextInfo } from "../../context";
import Modal from "../../components/Modal";

export const CarPage = () => {
  const initialState = {
    contato_email: "",
    contato_telefone: "",
    contato_descricao: "",
    contato_nome: ""
  };

  const { dataContext, setDataContext } = useContext(contextInfo);

  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [opcionaisData, setOpcionaisData] = useState([]);
  const [valuesContato, setValuesContato] = useState(initialState);

  const handleChangesForm = (e) => {
    valuesContato[e.target.name] = e.target.value;
  };

  const fetchCarById = async (id) => {
    axios
      .get("/processService/" + id)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((e) => {
        try {
          console.log(e.response.data);
        } catch (e) {
          console.log(
            "Ocorreu um erro de conexão. Tente novamente mais tarde."
          );
        }
      });
  };

  const fetchOpcionaisById = async (id) => {
    axios
      .get("/opcionaisRetriever/" + id)
      .then((res) => {
        setOpcionaisData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        try {
          console.log(e.response.data);
        } catch (e) {
          console.log(
            "Ocorreu um erro de conexão. Tente novamente mais tarde."
          );
        }
      });
  };

  const sendContact = async (id) => {
    axios
      .post("/sendContato/" + id, valuesContato)
      .then((res) => {
        setValuesContato([]);
        setOpenModal(false)
        alert("Solicitacao enviada!")
      })
      .catch((e) => {
        try {
          console.log(e.response.data);
        } catch (e) {
          console.log(
            "Ocorreu um erro de conexão. Tente novamente mais tarde."
          );
        }
      });
  };

  useEffect(() => {
    fetchCarById(id);
    fetchOpcionaisById(id);
  }, []);

  return (
    <>
      <Header />
      <div className="carpage-container">
        <div className="carpage-container-conteudo">
          <div className="carpage-header-wrapper">
            <div className="carpage-titulo-wrapper">
              <div className="carpage-titulo-superior">
                <div className="carpage-titulo">
                  {data.car_marca}{" "}
                  <span className="carpage-titulo-destaque">
                    {data.car_modelo}
                  </span>
                </div>
                <div className="carpage-titulo-anomodelo-wrapper">
                  <div className="carpage-titulo-anomodelo">
                    {data.car_ano_modelo}/{data.car_ano_fabricacao}
                  </div>
                </div>
              </div>
              <div className="carpage-subtitulo">
                {data.car_motor} {data.car_versao}
              </div>
            </div>

            <div className="carpage-preco-wrapper">
              <div className="carpage-preco">R${data.processo_preco}</div>
            </div>
          </div>
          <div className="carpage-photoandinfo">
            <Carroussel id={id} />
            <div className="carpage-callinfo">
              <div className="carpage-callinfo-title">
                <span>Disponível em:</span>
                <span>{dataContext.revenda_endereco}</span>
              </div>
              <div className="carpage-callinfo-buttons">
                <div className="carpage-callinfo-financiamentoinfo">
                  <MdInfoOutline />
                  Entre em contato conosco para verificar parcelas de
                  financiamento!
                </div>
                <button
                  onClick={() => {
                    setOpenModal(!openModal);
                    setValuesContato(initialState)
                  }}
                  className="carpage-callinfo-buttons-others"
                >
                  ENTRE EM CONTATO CONOSCO! <FaPhoneFlip />
                </button>
              </div>
            </div>
          </div>
          <div className="carpage-caracteristicas-container">
            <div className="carpage-caracteristicas-titulo">
              CARACTERÍSTICAS DO VEÍCULO
            </div>
            <div className="carpage-caracteristicas-grid">
              <div className="carpage-caracteristicas-objeto">
                <TbManualGearbox />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">Câmbio</span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_transmissao}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <FaTachometerAlt />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">
                    Quilometragem
                  </span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_km}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <IoColorPaletteOutline />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">Cor</span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_cor}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <LuFuel />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">
                    Combustível
                  </span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_combustivel}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <FaCalendar />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">Ano</span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_ano_modelo}/{data.car_ano_fabricacao}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <FaCarSide />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">
                    Carroceria
                  </span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_carroceria}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <MdCreditCard />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">
                    Final de Placa
                  </span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_placa}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <GiCarDoor />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">Portas</span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_portas_qtd}
                  </span>
                </div>
              </div>

              <div className="carpage-caracteristicas-objeto">
                <TbSteeringWheel />
                <div className="carpage-caracteristicas-caracedescricao">
                  <span className="carpage-caracteristicas-carac">Direção</span>
                  <span className="carpage-caracteristicas-descricao">
                    {data.car_direcao}
                  </span>
                </div>
              </div>
            </div>
            <div className="carpage-opcionais-container">
              <div className="carpage-opcionais-titulo">OPCIONAIS</div>
              <div className="carpage-opcionais-itens-container">
                {opcionaisData.map((data) => (
                  <div className="carpage-opcionais-itens">
                    {data.opcionais_name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="carpage-background-content"></div>
        </div>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          height="600px"
          width="600px"
        >
          <div className="modalcontato-titulo">
            Envie sua solicitacao de contato sobre {data.car_marca}{" "}
            {data.car_modelo}!
          </div>

          <div className="modalcontato-formdecontato">
            <label htmlFor="">Nome:</label>
            <input onChange={(e) => handleChangesForm(e)} name="contato_nome" type="text" />

            <label htmlFor="">Telefone: </label>
            <input onChange={(e) => handleChangesForm(e)} name="contato_telefone" type="text" />

            <label htmlFor="">Email:</label>
            <input onChange={(e) => handleChangesForm(e)} name="contato_email" type="text" />

            <label htmlFor="">Descricao</label>
            <textarea
              onChange={(e) => handleChangesForm(e)}
              type="text"
              name="contato_descricao"
              className="modalcontato-formdecontato-inputdescricao"
            />

            <button className="modalcontato-formdecontato-butao" onClick={(e) => sendContact(id)}>
              Enviar Solicitacao
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
