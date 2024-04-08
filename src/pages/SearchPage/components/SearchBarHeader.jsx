import { FaSearch } from "react-icons/fa";
import "../styles/SearchBarHeader.css"
import { useSearchParams } from "react-router-dom";


const SearchBarHeader = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")


  return (
    <div className="searchbarheader-container">
        <div className="searchbarheader-barradepesquisa">
            <FaSearch/>
            <input placeholder="Digite marca ou modelo do carro" type="text" defaultValue={query}/>
        </div>
    </div>
  )
}

export default SearchBarHeader