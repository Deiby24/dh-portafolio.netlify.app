import React from "react";
import { ExpertiseData } from "./Data/ExpertiseData";

const images = require.context('../../src/img', true);

export function Expertise() {
    return(
        <div className="MainContainer w-full">
            <h2 className="titleSkills">SKILLS</h2>
            <div id="Skills" className="containerExpertise relative">
                <div className="containerCardExpertise">
                    {ExpertiseData.map(items => (
                        <button 
                            key={items.id} 
                            className="carouselCard group flex flex-col md:flex-row items-center mt-16 border rounded-lg shadow md:max-w-xl bg-opacity-90 border-stone-50 bg-neutral-950"
                        >
                            {/* Contenedor de imagen con relación de aspecto cuadrada */}
                            <div className="w-full md:w-56 h-48 md:h-56 overflow-hidden relative">
                                <img 
                                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                                    src={images(items.image)} 
                                    alt={items.name}
                                />
                            </div>
                            
                            <div className="flex flex-col justify-between p-4 w-full">
                                <h5 className="mb-2 text-2xl font-bold text-white">{items.name}</h5>
                                <p className="text-gray-400 text-sm">{items.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
                <div>
                    <h2 className="txtSkills">scroll to see more skills</h2>   
                </div>
            </div> 
        </div>
    )
}