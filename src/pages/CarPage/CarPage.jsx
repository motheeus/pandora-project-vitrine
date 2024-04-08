import { useEffect, useState } from "react"
import Header from "../SearchPage/components/Header"
import { Carroussel } from "./components/Carroussel"
import "./styles/CarPage.css"
import { FaWhatsapp, FaTachometerAlt, FaCalendar, FaCarSide } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { GoShare } from "react-icons/go";
import { MdInfoOutline, MdCreditCard } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import { TbSteeringWheel } from "react-icons/tb";


export const CarPage = () => {

  return (
    <>
      <Header/>
        <div className="carpage-container">
          <div className="carpage-container-conteudo">
            <div className="carpage-header-wrapper">
              <div className="carpage-titulo-wrapper">
                <div className="carpage-titulo-superior">
                  <div className="carpage-titulo">HONDA <span className="carpage-titulo-destaque">CIVIC</span></div>
                  <div className="carpage-titulo-anomodelo-wrapper">
                    <div className="carpage-titulo-anomodelo">2020/2021</div>
                  </div>
                </div>
                <div className="carpage-subtitulo">2.0 16v FLEXONE EXL</div>
              </div>

              <div className="carpage-preco-wrapper">
                <div className="carpage-preco">R$121.000</div>
              </div>

            </div>
            <div className="carpage-photoandinfo">
              <Carroussel/>
              <div className="carpage-callinfo">
                <div className="carpage-callinfo-title">
                  <span>Disponível em:</span>
                  <span className="">FILIAL CENTRO</span>
                  <span>Av. Nestor de Moura Jardim, 1320 - Moradas da Colina, Guaíba - RS, 92500-000</span>
                </div>
                <div className="carpage-callinfo-buttons">
                  <div className="carpage-callinfo-financiamentoinfo">
                    <MdInfoOutline />Entre em contato conosco para verificar parcelas de financiamento!
                  </div>
                  <button className="carpage-callinfo-buttons-whatsapp">ENTRAR EM CONTATO POR WHATSAPP <FaWhatsapp/></button>
                  <button className="carpage-callinfo-buttons-others">ENTRAR EM CONTATO POR TELEFONE <FaPhoneFlip/></button>
                  <button className="carpage-callinfo-buttons-others">COMPARTILHAR <GoShare/></button>
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
                    <span className="carpage-caracteristicas-carac">
                      Câmbio
                    </span>
                    <span className="carpage-caracteristicas-descricao">
                      Automático
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
                      242.984
                    </span>
                  </div>
                </div>

                <div className="carpage-caracteristicas-objeto">
                  <IoColorPaletteOutline />
                  <div className="carpage-caracteristicas-caracedescricao">
                    <span className="carpage-caracteristicas-carac">
                      Cor
                    </span>
                    <span className="carpage-caracteristicas-descricao">
                      Branco
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
                      Gas/Alcool
                    </span>
                  </div>
                </div>

                <div className="carpage-caracteristicas-objeto">
                  <FaCalendar />
                  <div className="carpage-caracteristicas-caracedescricao">
                    <span className="carpage-caracteristicas-carac">
                      Ano
                    </span>
                    <span className="carpage-caracteristicas-descricao">
                      2020/2021
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
                      Sedã
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
                      0
                    </span>
                  </div>
                </div>

                <div className="carpage-caracteristicas-objeto">
                  <GiCarDoor />
                  <div className="carpage-caracteristicas-caracedescricao">
                    <span className="carpage-caracteristicas-carac">
                      Portas
                    </span>
                    <span className="carpage-caracteristicas-descricao">
                      4
                    </span>
                  </div>
                </div>

                <div className="carpage-caracteristicas-objeto">
                  <TbSteeringWheel />
                  <div className="carpage-caracteristicas-caracedescricao">
                    <span className="carpage-caracteristicas-carac">
                      Direção
                    </span>
                    <span className="carpage-caracteristicas-descricao">
                      Elétrica
                    </span>
                  </div>
                </div>

              </div>
            </div>
            <div className="carpage-background-content">
              
            </div>
          </div>
        </div>
    </>
  )
}
