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
                        <li className="linav"><ScrollLink className="custom-link" to="BackGroundNav" smooth={true} offset={-100} duration={50} >Home</ScrollLink></li>
                        <li className="linav"><ScrollLink className="custom-link" to="About" smooth={true} offset={-100} duration={50}>About-me</ScrollLink></li>
                        <li className="linav"><ScrollLink className="custom-link" to="Proyects" smooth={true} offset={-100} duration={50}>Proyects</ScrollLink></li>
                        <li className="linav"><ScrollLink className="custom-link" to="Collaborationsbj" smooth={true} offset={-100} duration={50}>Collaborations</ScrollLink></li>
                        <li className="linav"><ScrollLink className="custom-link" to="Skills" smooth={true} offset={-100} duration={50}>Skills</ScrollLink></li>
                        <li className="linav"><ScrollLink className="custom-link" to="Contact" smooth={true} duration={50}>Contact</ScrollLink></li>
                    </ul>
            </div>
            <div className="containerInfo" style={{height:'800px'}}>
                <div className="subContainerInfo">
                    <div className="containerImgAbout">
                        <img alt="aboutimg" className="imgAboutMe" src={require('../img/Deiby.png')}></img>
                    </div>
                    <div className="containerTextNavb">
                        <div className="textName">
                            <h1>Deiby Hernandez Perez</h1>
                        </div>
                        <div className="textCharge">
                            <h2>Software Developer</h2>
                        </div>
                        <div className="buttonLearnMore">
                            <ScrollLink to="About" offset={-100} duration={50}>Learn more</ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    );

};


