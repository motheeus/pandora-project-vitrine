import Header from "./components/Header"
import { Section1 } from "./components/Section1"
import { Section2 } from "./components/Section2"
import { useEffect } from "react"
import axios from 'axios'

function LandingPage() {

/*   const setupPage = async () => {
    axios.get('http://localhost:8801/vitrineConfig')
    .then(res => {
      document.documentElement.style.setProperty('--primary-color', res.data.primaryColor);
    })
  }

  useEffect(()=> {
    setupPage()
  }, []) */

  return (
    <>

      <Header />

      <Section1 />

      <Section2 />
      
    </>
  )
}

export default LandingPage
