import React from 'react';
import "./AboutMe.css";
import ProfilePic from '../../assets/tarun_thota.jpg';


function AboutMe(props) {
    return (
        <div className="aboutMe">
            <div className="aboutMeText">
                <div className="imageDiv">
                    <img src={ProfilePic} className="profilePic" alt="Avatar"/>
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
                        I have 3 years of work experience in Software Industry, where my primary focus was towards building Full Stack Web and Mobile Applications
I am a learning enthusiast and I keep on updating my skillset based on what the market demands.
                        </span>
                        <br/>
                        <span className="sp1">
                        I am a tech savvy enthusiast. I stay updated with the latest technologies. My self-motivation has driven me to currently pursue Master's degree. 
                        My earlier experience as a Full Stack Developer at Wipro has helped me to understand and bridge the gap between curricular and practical applications.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;