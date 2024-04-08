import { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "../styles/Carroussel.css"


export const Carroussel = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(1)
  const [imagemUrl, setImagemUrl] = useState("")

  const exemplo = [
    {
      id: 1,
      imageLink: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240313/honda-civic-1-5-16v-turbo-gasolina-touring-4p-cvt-wmimagem22065564935.webp?s=fill&w=1920&h=1440&q=75"
    },
    {
      id: 2,
      imageLink: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240313/honda-civic-1-5-16v-turbo-gasolina-touring-4p-cvt-wmimagem22065674829.webp?s=fill&w=1920&h=1440&q=75"
    },
    {
      id: 3,
      imageLink: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240313/honda-civic-1-5-16v-turbo-gasolina-touring-4p-cvt-wmimagem22065697529.webp?s=fill&w=1920&h=1440&q=75"
    },
    {
      id: 4,
      imageLink: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240313/honda-civic-1-5-16v-turbo-gasolina-touring-4p-cvt-wmimagem22065726421.webp?s=fill&w=1920&h=1440&q=75"
    },
    {
      id: 5,
      imageLink: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240313/honda-civic-1-5-16v-turbo-gasolina-touring-4p-cvt-wmimagem22065564935.webp?s=fill&w=1920&h=1440&q=75"
    }
  ]

  const setColor = (e) => { 
    if (imagemSelecionada == e){ 
      return { 
        border: "solid 3px #009E15",
      }
    } 
  }



  useEffect(() => {
    setImagemUrl(exemplo[imagemSelecionada-1].imageLink)
  }, [imagemSelecionada])

  return (
    <div className='galeria-container'>
    
      <div className="imagem-display">
        <img src={imagemUrl} alt="" />
      </div>

      <div className="imagem-lista-container">
{/*         <button className='botao-esquerda'> <FaArrowLeft/> </button>
        <button className='botao-direita'> <FaArrowRight/> </button> */}
        <div className="imagem-lista">
          {exemplo.map((item, i) => (
            <div key={i}  className="imagem-imagem">
              <img src={item.imageLink} style={setColor(i+1)} alt="" height="80" width="147" onClick={() => {setImagemSelecionada(item.id)}}/>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}