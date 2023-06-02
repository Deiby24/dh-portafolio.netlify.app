import React,{ useEffect, useState } from "react";


export function Navbar(){

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.embed.im/snow.js";
        script.defer = true;
        const snows =document.getElementsByClassName("containerNav")[0];
        snows.appendChild(script);
        return () => {
          snows.removeChild(script);
        };
    }, []);
    
    return (
        <div className="container">
            <div className="boxImg">
                <div className="containerNav">
                    <ul  className="NavbarMenu">
                        <il ><a href="/">Home</a></il>
                        <il ><a href="/">About-me</a></il>
                        <il ><a href="/">Proyectos</a></il>
                        <il ><a href="/">Empresas</a></il>
                        <il ><a href="/">Contactos</a></il>
                    </ul>
                </div>
                <img id="BackGroundNav" src={require('../img/NavbarFondo.jpg')} alt='Foto 1'/>
            </div> 
        </div>
 
    );

};


