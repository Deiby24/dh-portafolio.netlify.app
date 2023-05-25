import React from "react";


export function Navbar(){
    return (
        <div className="contenedorTestimony">
            <div className="boxImg">
                <div className="containerNav">
                    <ul className="NavbarMenu">
                        <il ><a href="/">Home</a></il>
                        <il ><a href="/">Sobre mi</a></il>
                        <il ><a href="/">Proyectos</a></il>
                        <il ><a href="/">Empresas</a></il>
                        <il ><a href="/">Contactos</a></il>
                    </ul>
                </div>
                <img className='imgTestimony' src={require('../img/NavbarFondo.jpg')} alt='Foto 1'/>
            </div>
        </div>
    );
};