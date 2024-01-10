import React from "react";
import "./Home.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiPhp } from "react-icons/si";

function Home() {
    return(
        <div className="all-home">
            <div className="main-part">
                <div className="p-with-img">
                    <p className="purple-home1">
                    We Create Real 
                        <p className="MAGIC">
                        MAGIC
                        </p>
                        <p className="magical-platform">
                        The magical platform for digital products
                        </p>
                        <button className="get-in-touch">
                        Get In Touch
                        </button>
                    </p>
                    <div className="home1"></div>
                </div>
            </div>
            <div className="circles">
                <div className="circles-item"><FaHtml5 className="lang-icons"/></div>
                <div className="circles-item"><FaCss3Alt  className="lang-icons"/></div>
                <div className="circles-item"><IoLogoJavascript  className="lang-icons"/></div>
                <div className="circles-item"><FaPython  className="lang-icons"/></div>
                <div className="circles-item"><SiPhp  className="lang-icons"/></div>
                <div className="circles-item"><SiCsharp  className="lang-icons"/></div>
            </div>
            <div className="who-we-are">
                <div className="home2"></div>
                <div className="who-we-text">
                    <p id="Whowere">Who We’re & What We Do ?</p>
                    <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.
                    Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render </p>
                </div>
            </div>  
            <div className="start-learning">
                <div className="text-start-learning">
                    <p>Start Learning</p>
                    <p>Popular Courses</p>
                </div>
            </div>
        </div>
    );
}

export default Home;