import React,{ useEffect, useState } from "react";


export function Navbar(){
    const [snows, setSnows] = useState([]);

    useEffect(() => {
        const clonedSnows = [];
        for (let i = 0; i < 7; i++) {
            const valueLeft = 5 + i * 15;
            const valueMrg = getRandomMargin();
            const snowStyle = { left: `${valueLeft}%`, marginBottom: `${valueMrg}%`  };
          clonedSnows.push(<div className='snow' style={snowStyle} key={i}></div>);
        }
        setSnows(clonedSnows);
    }, []);

    const getRandomMargin = () => {
        const minMargin = 1;
        const maxMargin = 7;
        return Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);
    };
    
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
                <img className='imgTestimony' src={require('../img/NavbarFondo.jpg')} alt='Foto 1'/>
                <div id="containerSnows"  className="snows">
                    {/* <div id="snow" className="snow"></div> */}
                    {snows}
                </div>
            </div> 

        </div>
 
    );

};


