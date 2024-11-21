export const applyConfig = () => {

    const config = {
        primaryColor: "",
        landingH1: "Compre nossos carros!",
        landingH2: "venha venha comprar com nois!!!!!!!!!!",
        landingBackgroundImage: "",
        logo: ""
    }

    const primaryColorVariable = document.querySelector(':root')

    primaryColorVariable.style.setProperty('--primary-color', 'red')

    return config
} 