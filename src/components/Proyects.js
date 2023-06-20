import React from "react";

import data from './Data/data';

const images = require.context('../../src/img', true)
export function Proyects() {
    return(
        <div  className="w-full" style={{height:`${data.length * 200}px`}}>
            <h2  className="titleProyects">PROYECTS</h2>
            <div id="Proyects" className="containerProyect absolute"> 
                {data.map(item=> (
                <div  className="bg-neutral-950 border text-stone-50 border-stone-50 cardContainer max-w-xs rounded-2xl overflow-hidden">
                    <img src={images(item.image)} alt="card"/>
                    <div className="px-6 py-6">
                        <h2 className="text-xl mb-2">{item.name}</h2>
                        <p className="text-sm">{item.description}</p>
                        {
                            item.enabled ? <button className="bg-zinc-900 text-white py-2 px-3 rounded-lg mt-4 ml-auto block">{item.button}</button> 
                            :<div className="bg-zinc-900 text-white text-center	 py-2 px-3 rounded-lg mt-4 ml-auto block">Proximamente</div>
                        }   
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}