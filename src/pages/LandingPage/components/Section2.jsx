import "../styles/Section2.css"
import { CardAnuncio } from "../../../components/CardAnuncio"

import axios from "../../../api/axios"
import { useEffect, useState } from "react"

export const Section2 = () => {
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
    <div className="section2-container">
        <h2>Confira alguns carros anunciados!</h2>

        <div className="confiracarros">
          {data.map((data, i) => (
                    <CardAnuncio data={data} key={i}/>
                  ))}
        </div>
    </div>
  )
}
