import React , {useEffect , useRef} from "react";
import Typed from "typed.js";

export function AboutMe() {

    const AnimationAbout = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(AnimationAbout.current,{
            strings: ['> Tengo 18 años , vivo en Antioquia/Medellín , Tengo muchos conocimiento en muchos lenguajes de programación pero me gustaría aprender mas ya que tengo un gran interés por aprender cosas nuevas y llenarme de conocimientos , soy una persona de retos lo cual si me plantean algo difícil me intereso por eso hasta terminarlo. Mis características , habilidades y cualidades son que si no se algo trato de prenderlo por mi mismo , el trabajo en equipo es lo que mas me gusta , ayudar a los demás o compartirles mi conocimiento ,el respeto ante todo, soy consciente los tiempos tanto el mio como el de los demás , por lo tanto me considero una persona motivada a hacer las cosas, que cada dia se levanta pensando en el presente tanto como el futuro y que quiere aprender mas.'],
            typeSpeed: 40,
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
