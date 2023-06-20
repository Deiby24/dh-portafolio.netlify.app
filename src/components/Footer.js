import React from "react";

const images = require.context('../../src/img', true)
export function Footer() {
    return(
        <div className="w-full" style={{height:"200px", zIndex:'1'}}>
            <div className="containerFooter">
                <div id="Contact" className="subContainerFooter">
                    <div className="contact">
                        <a href="https://github.com/Deiby24" target="blanck"><img src={images('./github-white.svg')} /></a>
                        <a href="mailto:bhdeiby@gmail.com" target="blanck"><img src={images('./gmail.svg')}/></a>
                        <a href="https://www.linkedin.com/in/deiby-hernandez-a73280275/" target="blanck"><img src={images('./linkedin.svg')}/></a>
                        {/* <a href="https://github.com/Deiby24" target="blanck"><img src={images('./gmail.svg')}/></a> */}
                    </div>
                    <div className="copyright">
                        <h1> &#169; Deiby Hernandez / Todos los derechos reservados</h1>
                    </div>
                </div>

            </div>
        </div>
    )
    
}