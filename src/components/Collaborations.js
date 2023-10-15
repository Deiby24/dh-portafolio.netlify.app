import React from "react";
import collaborations from "./Data/CollaborationsData";

const images = require.context('../../src/img', true)
export function Empresas({items}) {
    return(
        <div id="Collaborationspth" className="w-full" style={{height:`${collaborations.length * 200}px`}}>
            <div id="Collaborationsbj" className="containerCompanies">
                <div className="titleCompanies">
                    <h1>COLLABORATIONS</h1>
                </div>
                <div className="containerCardCompanies">
                    {collaborations.map(items=>(
                        <div key={items.id} >
                            <div className="max-w-sm rounded overflow-hidden ">
                                <div style={{height:"200px"}}>
                                    <img id="imgCollaborations" className="w-full h-full object-contain" src={images(items.image)} alt="Sunset in the mountains"/>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{items.name}</div>
                                    <p className="text-gray-700 text-base">
                                        {items.description}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{items.etiq}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{items.etiq2}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{items.etiq3}</span>
                                </div>
                            </div>
                        </div>
                    ))}   
                </div>
            </div>
        </div>
    )
}