import React , {useEffect , useRef} from "react";
import Typed from "typed.js";

export function AboutMe() {

    const AnimationAbout = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(AnimationAbout.current,{
            strings: ['> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est ratione neque facere, vitae quam totam deleniti corrupti ad aliquid magnam voluptatem! Maxime voluptatum quae reprehenderit quas necessitatibus iure in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est ratione neque facere, vitae quam totam deleniti corrupti ad aliquid magnam voluptatem! Maxime voluptatum quae reprehenderit quas necessitatibus iure in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est ratione neque facere, vitae quam totam deleniti corrupti ad aliquid magnam voluptatem! Maxime voluptatum quae reprehenderit quas necessitatibus iure in.'],
            typeSpeed: 40,
        })

        return()=> {
            typed.destroy();
        }

    },[]);



    return(
        <div className="w-full" style={{height:"600px"}}> 
            <div className="containerAbout">
                <div className="titleAbout">
                    <p>About Me</p>
                </div>
                <div className="subContainerAbout">
                    <div className="containerImgAbout">
                        <div className="rounded-circle BackgrounAbout">
                            <img alt="aboutimg" className="imgAboutMe" src={require('../img/AboutMe.jpg')}></img>
                        </div>
                    </div>
                    <div className="AboutMe">
                        <h1 id="aboutName">
                            Deiby Hernandez Perez
                        </h1>
                        <div className="textAbout">
                            <span  ref={AnimationAbout}/>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
