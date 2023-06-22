import React,{ useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';

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
            <input type="checkbox" id="active"/>
                <label for="active" class="menu-btn"><span></span></label>
                <label for="active" class="close"><span></span></label>
            <div className="containerNav">
                    <ul  className="NavbarMenu">
                        <li><ScrollLink className="custom-link" to="BackGroundNav" smooth={true} offset={-100} >Home</ScrollLink></li>
                        <li><ScrollLink className="custom-link" to="About" smooth={true} offset={-100}>About-me</ScrollLink></li>
                        <li><ScrollLink className="custom-link" to="Proyects" smooth={true} offset={-100}>Proyects</ScrollLink></li>
                        <li><ScrollLink className="custom-link" to="Collaborationsbj" smooth={true} offset={-100}>Collaborations</ScrollLink></li>
                        <li><ScrollLink className="custom-link" to="Skills" smooth={true} offset={-100}>Skills</ScrollLink></li>
                        <li><ScrollLink className="custom-link" to="Contact" smooth={true} >Contact</ScrollLink></li>
                    </ul>
            </div>
                <img id="BackGroundNav" src={require('../img/NavbarFondo.jpg')} alt='Foto 1'/>
        </div>
 
    );

};


