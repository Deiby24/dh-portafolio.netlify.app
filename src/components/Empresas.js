import React from "react";
import collaborations from "./Collaborations";

const images = require.context('../../src/img', true)
export function Empresas({items}) {
    return(
        <div className="w-full" style={{height:"500px"}}>
            <div className="containerCompanies">
                <div className="titleCompanies">
                    <h1>Companies or Collaborations</h1>
                </div>
                <div className="containerCardCompanies">
                    {collaborations.map(items=>(
                        <div>
                            <div class="max-w-sm rounded overflow-hidden ">
                                <div className="">
                                    <img className="w-full" src={images(items.image)} alt="Sunset in the mountains"/>
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