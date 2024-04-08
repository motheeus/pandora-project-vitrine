import "../styles/SearchBar.css"
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const SearchBar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const submitSearch = () => {

    if (!search) {
      navigate("/estoque")
    }
    else {
      navigate(`/search?q=${search}`)
      setSearch("")
    }
    
  }

  return (
    <div className="searchbar-wrapper">

        <div className="searchbar-divisao">
            <div className="searchbar-barradepesquisa">
                <FaSearch/> 
                <input placeholder="Digite marca ou modelo do carro" type="text" onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </div>

        <div className="searchbar-divisao">
            <button onClick={submitSearch}>PESQUISAR</button>
        </div>
    </div>
  )
}
