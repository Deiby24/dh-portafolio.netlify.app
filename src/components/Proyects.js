import React from "react";
import '.././index.css'

export function Proyects() {
    return(
        <div className="containerProyect absolute"> 
            <div className="bg-slate-50 text-slate-950 cardContainer max-w-xs rounded-2xl overflow-hidden">
                <img src={require('../img/testimonio-2.jpg')} alt="card"/>
                <div className="px-6 py-6">
                    <h2 className="text-xl mb-2">React</h2>
                    <p className="text-sm">Loremawdadwa</p>
                    <button className="bg-indigo-500 py-2 px-3 rounded-lg mt-4 ml-auto block">Ir</button>
                </div>
            </div>
        </div>
    )
}