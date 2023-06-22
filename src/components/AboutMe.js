import React , {useEffect , useRef} from "react";
import Typed from "typed.js";

export function AboutMe() {

    const AnimationAbout = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(AnimationAbout.current,{
            strings: ['> Tengo 18 años, vivo en Antioquia/Medellín, estudie una técnica en desarrollo de software y debido a esto tengo un gran conocimiento en varios lenguajes de programación no obstante me gustaría adquirir mucho mas conocimiento del ya que tengo, puesto que me gusta aprender cosas nuevas, por otro lado me encantan los retos por que así demuestro mis habilidades y conocimientos. <br/>  Mis cualidades son : soy una persona autodidacta, creativa, eficiente, puntual, responsable, honesta, uno de mis fuertes es el trabajo en equipo ya que me gusta ayudar a los demás e incluso compartir mi conocimiento. Para mi el respeto es esencial por ello soy consciente de los tiempos de los demás y el mío, además me motiva demasiado realizar mis deberes de la mejor manera y que sean de excelente calidad.'],
            typeSpeed: 0,
        })

        return()=> {
            typed.destroy();
        }

    },[]);



    return(
        <div  className="w-full" style={{height:"600px"}}> 
            <div className="containerAbout" >
                <div id="About" className="titleAbout">
                    <h2>ABOUT ME</h2>
                </div>
                <div className="subContainerAbout">
                    <div className="containerImgAbout">
                        <div className="rounded-circle BackgrounAbout">
                            <img alt="aboutimg" className="imgAboutMe" src={require('../img/AboutMe.jpg')}></img>
                        </div>
                    </div>
                    <div className="AboutMe">
                        <h1 id="aboutName">
                            Deiby Hernandez Perez
                        </h1>
                        <div className="textAbout">
                            <span  ref={AnimationAbout}/>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
