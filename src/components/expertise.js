import React from "react";
import { ExpertiseData } from "./Data/ExpertiseData";

const images = require.context('../../src/img', true)


export function Expertise() {
    return(
        <div id="" className="MainContainer w-full">
            <h2 className="titleSkills">SKILLS</h2>
            <div id="Skills" className="containerExpertise relative">
                <div className="containerCardExpertise ">
                    {ExpertiseData.map(items=>(
                        <button key={items.id} className="carouselCard pointer-events-none text-center flex flex-col items-center mt-16 border  rounded-lg shadow md:flex-row md:max-w-xl bg-opacity-90  border-stone-50 bg-neutral-950 ">
                            <img className=" imgCardExpertise object-cover w-full rounded-t-lg h-96  md:h-44 md:w-56 md:object-cover md:rounded-none md:rounded-l-lg" src={images(items.image)} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{items.name}</h5>
                                <p className="mb-3 font-normal text-gray-400">{items.description}</p>
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