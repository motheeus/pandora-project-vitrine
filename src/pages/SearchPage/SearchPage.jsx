import React, { useEffect } from 'react'

import Header from './components/Header'
import { CardAnuncio } from "/src/components/CardAnuncio.jsx"
import { useSearchParams } from 'react-router-dom'

import axios from "../../api/axios";

import "./styles/SearchPage.css"
import { useState } from 'react';

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [data, setData] = useState([])

  const fetchProcess = () => {
    axios
      .get("/processService")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        try {
          toast.error(e.response.data);
        } catch (e) {
          toast.error(
            "Ocorreu um erro de conexão. Tente novamente mais tarde."
          );
        }
      });
  };

  useEffect(() => {
    fetchProcess();
  }, []);

  return (
    <div className='searchpage-container'>
      <Header/>
      <div className="searchpage-container-conteudo">

          <div className="searchpage-section1">
            {query 
            ? <h2>Mostrando resultados para: <span className="texto-destaque">{query}</span></h2>
            : <h2>Mostrando carros em estoque</h2>
            }
            <p>13 resultados encontrados</p>
          </div>

          <div className="searchpage-section2">

{/*             <div className="searchpage-filteroptions">

              <div className="searchpage-filter-divisions">
                Marca
                <select name="" id="">
                  <option value="">Selecione</option>
                </select>
              </div>

              <div className="searchpage-filter-divisions">
                Motor
                <select name="" id="">
                  <option value="">Selecione</option>
                </select>
              </div>

              <div className="searchpage-filter-divisions">
                Quilometragem

                <div className="searchpage-filter-deateinput-flex">
                  <div className="searchpage-filter-deateinput">
                      <span>De:</span>
                      <input type="text" />
                  </div>
                  <div className="searchpage-filter-deateinput">
                      <span>Até:</span>
                      <input type="text" />
                  </div>
                </div>

              </div>

              <div className="searchpage-filter-divisions">
                Ano

                <div className="searchpage-filter-deateinput-flex">
                  <div className="searchpage-filter-deateinput">
                      <span>De:</span>
                      <input type="text" />
                  </div>
                  <div className="searchpage-filter-deateinput">
                      <span>Até:</span>
                      <input type="text" />
                  </div>
                </div>

              </div>

              <div className="searchpage-filter-divisions">
                Preço

                <div className="searchpage-filter-deateinput-flex">
                  <div className="searchpage-filter-deateinput">
                      <span>De:</span>
                      <input type="text" />
                  </div>
                  <div className="searchpage-filter-deateinput">
                      <span>Até:</span>
                      <input type="text" />
                  </div>
                </div>

              </div>

              <div className="searchpage-filter-divisions">
                Cambio
                <div className="searchpage-filter-checkbox">
                  <input name="manual" type="checkbox" />
                  <label htmlFor="manual">Manual</label>
                </div>

                <div className="searchpage-filter-checkbox">
                  <input name="manual" type="checkbox" />
                  <label htmlFor="manual">Automático</label>
                </div>

                <div className="searchpage-filter-checkbox">
                  <input name="manual" type="checkbox" />
                  <label htmlFor="manual">Semi-Automático</label>
                </div>

              </div>

              <div className="searchpage-filter-divisions">
                Carroceria
                <div className="searchpage-filter-checkbox">
                  <input name="manual" type="checkbox" />
                  <label htmlFor="manual">Sedã</label>
                </div>

                <div className="searchpage-filter-checkbox">
                  <input name="manual" type="checkbox" />
                  <label htmlFor="manual">Hatch</label>
                </div>

                <div className="searchpage-filter-checkbox">
                  <input name="manual" type="checkbox" />
                  <label htmlFor="manual">Pick-up</label>
                </div>

                <div className="searchpage-filter-checkbox">
                  <input name="manual" type="checkbox" />
                  <label htmlFor="manual">SUV</label>
                </div>
              </div>

              <div className="searchpage-filter-divisions">
                <button>Filtrar</button>
              </div>

    
            </div> */}

            <div className="searchpage-carcardresults">

              {data.map((data, i) => (
                  <CardAnuncio data={data} key={i}/>
                ))}
            </div>
          </div>

      </div>
    </div>
  )
}

export default SearchPage
