import React from 'react';
import "./HeaderComponent.css";

function HeaderComponent(props) {
    console.log("props: ", props);
    let boxShadow = "none";
    if(props.color == "black"){
        boxShadow = '0px 5px 9px 0px lightslategrey';
    }
    else{
        boxShadow = "none"
    }

    return (
            <header style={{backgroundColor:props.color, boxShadow: boxShadow}}>
                <a className="linkTag" href="#home">HOME</a>
                <a className="linkTag" href="#aboutMe">ABOUT ME</a>
                <a className="linkTag" href="#technicalSkills">TECHNICAL SKILLS</a>
                <a className="linkTag" href="#projects">PROJECTS</a>
                <a className="linkTag" style={{paddingRight:'5%'}} href="#contact">CONTACT</a>
            </header>
    );
}

export default HeaderComponent;