/* import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sliderIconStyle from "./sliderIcon.module.css";
import Carros from "../../assets/icons/icon-carro.svg";
import Motos from "../../assets/icons/icon-moto.svg";
import Ropa from "../../assets/icons/icon-ropa.svg";
import Deporte from "../../assets/icons/icon-deporte.svg";
import Muebles from "../../assets/icons/icon-mueble.svg";
import Computadores from "../../assets/icons/icon-computadores.svg";
import Celulares from "../../assets/icons/icon-celular.svg";
import Tv from "../../assets/icons/icon-tv.svg";
import Electrodomesticos from "../../assets/icons/icon-electrodomesticos.svg";

function SliderIcon() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 4
        },
        mobile: {
         breakpoint: { max: 768, min: 464 },
         items: 3
          },
        mobile1: {
          breakpoint: { max: 464, min: 300 },
          items: 2
        },
        mobile2: {
            breakpoint: { max: 300, min: 0 },
            items: 1
          }
      };
    return (<div className = {sliderIconStyle.container}>
        
        <div className ={sliderIconStyle.title}>
            <h2>¿Qué estás buscando hoy?</h2>
        </div> 
        <Carousel responsive={responsive}>            
        <div className = {sliderIconStyle.imgs}>               
                <img src={Carros} alt="Carros" />                               
                <p>Carros</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Motos} alt="Motos" />
                <p>Motos</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Ropa} alt="Ropa" />
                <p>Ropa</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Deporte} alt="Deporte" />
                <p>Deporte</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Muebles} alt="Muebles" />
                <p>Muebles</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Computadores} alt="Computadores" />
                <p>Computadores</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Celulares} alt="Celulares" />
                <p>Celulares</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Tv} alt="Tv, Audio y foto" /> 
                <p>Tv, Audio <br/> y foto</p>
            </div>
            <div className = {sliderIconStyle.imgs}>
                <img src={Electrodomesticos} alt="Electrodomésticos" />
                <p>Electrodomésticos</p>
            </div>
        </Carousel>
    </div>
        
        
        
    );
}

export default SliderIcon
 */