import React from 'react';
import "./AboutMe.css";
import ProfilePic from '../../assets/tarun_thota.jpg';


function AboutMe(props) {
    return (
        <div className="aboutMe">
            <div className="aboutMeText">
                <div className="imageDiv">
                    <img src={ProfilePic} alt="Avatar"/>
                </div>
                <div className="aboutMeDiv">
                    <span className="amText">About Me</span>
                    <br/><br/>
                    <p className="amContent">
                        <span className="sp">
                            Hey There, This is Tarun Thota, pursuing Masters of Science in Computer Science at University of North Carolina At Charlotte.
                        </span>
                        <br/>
                        <span className="sp1">
                            I have 3 years of work experience in Software Industry, where my primary focus was 
                            towards building full stack web and Mobile Applications
                        </span>
                        <br/>
                        <span className="sp1">
                            I am a learning enthusiast and I keep on updating my skillset based on what the market demands.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;