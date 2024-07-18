import React from "react";
import "./../css/Style.css";
import "./../css/Hero.css";
import { useContext } from "react";
import { MobileContext } from "../Utils/Context";
import { Slide } from "../Utils/Slide";
export default function Hero(){
    const {isMobile} = useContext(MobileContext);
    return(
       <div className="hero-container">
            {!isMobile ? <div className="header">I'm Dev Gupta. Software Developer.</div> :
            <div className="typography-self">I'm Dev Gupta. <br/>Software Developer.</div>
            }
            <div className="logo-self"></div>
            {!isMobile && <div className="logo-block"></div>}

            {isMobile && 
            <div className="Portagonist">
                 <Slide arrayItems={["App","","Developer",""]}/>
            </div>}
            {isMobile && <div className="Antagonist">
                 <Slide arrayItems={["Web","","Developer",""]}
                    reverse={true}
                 />
            </div>}
         </div>
    )
}