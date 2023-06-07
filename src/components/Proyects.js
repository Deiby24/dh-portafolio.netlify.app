import React from "react";
import '.././index.css';
import data from '../components/data';

const images = require.context('../../src/img', true)
export function Proyects() {
    return(
            <div className="containerProyect absolute"> 
                {data.map(item=> (
                <div className="bg-slate-50 text-slate-950 cardContainer max-w-xs rounded-2xl overflow-hidden">
                    <img src={images(item.image)} alt="card"/>
                    <div className="px-6 py-6">
                        <h2 className="text-xl mb-2">{item.name}</h2>
                        <p className="text-sm">{item.description}</p>
                        <button className="bg-indigo-500 py-2 px-3 rounded-lg mt-4 ml-auto block">{item.enabled ? `${item.button}`: item.button}</button>
                    </div>
                </div>
                ))}
            </div>
    )
}