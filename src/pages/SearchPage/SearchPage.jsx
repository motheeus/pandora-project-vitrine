import React from 'react'

import Header from './components/Header'
import { CardAnuncio } from "/src/components/CardAnuncio.jsx"
import { useSearchParams } from 'react-router-dom'

import "./styles/SearchPage.css"

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

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

            <div className="searchpage-filteroptions">

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

    
            </div>

            <div className="searchpage-carcardresults">
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>
              <CardAnuncio/>


            </div>
          </div>

      </div>
    </div>
  )
}

export default SearchPage
