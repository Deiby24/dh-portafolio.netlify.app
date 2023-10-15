import React , {useEffect , useRef} from "react";
import Typed from "typed.js";

export function AboutMe() {

    const AnimationAbout = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(AnimationAbout.current,{
            strings: ['> I am 19 years old, I live in Antioquia/Medellin, I studied a technique in software development and because of this I have a great knowledge in several programming languages however I would like to acquire much more knowledge than I already have, since I like to learn new things, on the other hand I love challenges because I demonstrate my skills and knowledge.  <br/><br/>  >My qualities are: I am a self-taught person, creative, efficient, punctual, responsible, honest, one of my strengths is teamwork because I like to help others and even share my knowledge. For me respect is essential so I am aware of the time of others and my own, I am also very motivated to perform my duties in the best way and that they are of excellent quality.'],
            typeSpeed: 0,
        })

        return()=> {
            typed.destroy();
        }

    },[]);



    return(
        <div  className="w-full" > 
            <div className="containerAbout" >
                <div id="About" className="titleAbout">
                    <h2>ABOUT ME</h2>
                </div>
                <div className="subContainerAbout">
                    <div className="AboutMe">
                        <div className="textAbout">
                            <span  ref={AnimationAbout}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
