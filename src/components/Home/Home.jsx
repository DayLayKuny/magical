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
                      <p id="Start-Learning">Start Learning</p>
                      <p id="Popular-Courses">Popular Courses</p>
                  </div>
                  <div className="all-courses">
                   <div className="top-courses">
                    <div className="Courses">
                     <div className="downstream-course">
                      <p className="introductions">Introduction to <b>JavaScript</b></p>
                      <p className="duration">9 weeks</p>
                      <div className="button-intro-div">
                       <button className="intro-button">Introduction</button>
                      </div>
                     </div>
                     <div className="downstream-course-svg">
                      <div className="js-svg"></div>
                     </div>
                    </div>
                    <div className="Courses">
                     <div className="downstream-course">
                      <p className="introductions">Design Tools: <b>PS & AI</b></p>
                      <p className="duration">9 weeks</p>
                      <div className="button-intro-div">
                       <button className="intro-button">Profession</button>
                      </div>
                     </div>
                     <div className="downstream-course-svg">
                       <div className="ainps"></div>
                     </div>
                    </div>
                   </div>
                   <div className="bottom-courses">
                    <div className="Courses">
                     <div className="downstream-course">
                      <p className="introductions"><b>HTML & CSS</b></p>
                      <p className="duration">6 weeks</p>
                      <div className="button-intro-div">
                       <button className="intro-button">Profession</button>
                      </div>
                     </div>
                     <div className="downstream-course-svg">
                       <div className="htmlncss"></div>
                     </div>
                    </div>
                    <div className="Courses">
                    <div className="downstream-course">
                      <p className="introductions">Introduction to <b>Programming</b></p>
                      <p className="duration">2 month</p>
                      <div className="button-intro-div">
                       <button className="intro-button">Introduction</button>
                      </div>
                     </div>
                     <div className="downstream-course-svg">
                       <div className="programming-svg"></div>
                     </div>
                    </div>
                   </div>
                  </div>
              </div>
              <div className="contact-home">
               <div className="downstream-contact-home">
                 <p className="device-choice-text">What is the device for your project? *</p>
                <div className="radio-device-selection">
                 <input type="radio" id="PC" value="PC/Website" name="device" />
                 <label htmlFor="PC">PC/Website</label>
                 <input type="radio" id="mobile" value="Mobile" name="device" />
                 <label htmlFor="mobile">Mobile</label>
                 <input type="radio" name="device" value="other" id="other" />
                 <label htmlFor="other">Other</label>
                </div>
                <div className="info-about-sender">
                 <div className="sender-info-div">
                  <p className="sender-info-p">First Name:</p>
                  <input type="text" />
                 </div>
                 <div className="sender-info-div">
                  <p className="sender-info-p">Country:</p>
                  <input type="text" />
                 </div>
                 <div className="sender-info-div">
                  <p className="sender-info-p">E-mail:</p>
                  <input type="text" />
                 </div>
                 <div className="sender-info-div">
                  <p className="sender-info-p">Message:</p>
                  <textarea name="message" id="area-message" cols="30" rows="5" maxLength="300"></textarea>
                 </div>
                </div>
                <div className="submit-button-sender">
                 <button className="submit-message">Submit</button>
                </div>
               </div>
               <div className="devices-svg"></div>
              </div>
          </div>
      );
}

export default Home;