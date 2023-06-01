import React from "react";

export function AboutMe() {
    return(
        <div className="containerAbout">
            <div className="subContainerAbout">
                <div className="containerImgAbout">
                    <div className="rounded-circle BackgrounAbout">
                        <img className="imgAboutMe" src={require('../img/AboutMe.jpg')}></img>
                    </div>
                </div>
                <div className="AboutMe">
                    <h2 id="titleAbout">
                        Deiby Hernandez Perez
                    </h2>
                    <h4 id="textAbout">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est ratione neque facere, vitae quam totam deleniti corrupti ad aliquid magnam voluptatem! Maxime voluptatum quae reprehenderit quas necessitatibus iure in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est ratione neque facere, vitae quam totam deleniti corrupti ad aliquid magnam voluptatem! Maxime voluptatum quae reprehenderit quas necessitatibus iure in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est ratione neque facere, vitae quam totam deleniti corrupti ad aliquid magnam voluptatem! Maxime voluptatum quae reprehenderit quas necessitatibus iure in!</h4>
                </div>

            </div>
            
        </div>
    )
}
