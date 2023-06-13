import React,{ useEffect } from "react";


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
        <div className="containerNavbar">
            <div className="containerNav">
                    <ul  className="NavbarMenu">
                        <il ><a href="/">Home</a></il>
                        <il ><a href="/">About-me</a></il>
                        <il ><a href="/">Proyects</a></il>
                        <il ><a href="/">Collaborations</a></il>
                        <il ><a href="/">Contact</a></il>
                    </ul>
            </div>
                <img id="BackGroundNav" src={require('../img/NavbarFondo.jpg')} alt='Foto 1'/>
        </div>
 
    );

};


