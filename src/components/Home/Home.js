import React from 'react';
import Typist from 'react-typist';
import { Button } from 'semantic-ui-react'
import Pdf from '../../resume/tarun_thota_resume.pdf';
import './Home.css';

function Home(props) {
    var button = (
        <a href={Pdf} rel="noopener noreferrer" target="_blank">
                <Button color='grey'  className="resumeButton">Resume</Button>
            </a>
    )
    return (
        <div className="home">
            <div className="homeText">

            <h1 className='name'>TARUN THOTA</h1>
            <center>
            <Typist cursor={{ hideWhenDone: true,hideWhenDoneDelay: 0 }}>
                <span className="stack"> Front End Developer</span>
                <Typist.Backspace style={{color:"white"}} count={19} delay={200} />
                <span className="stack"> Back End Developer</span>
                <Typist.Backspace count={20} delay={200} />
                <span className="stack"> Full-Stack Developer</span>
            </Typist>
            {button}
            </center>
            </div>
            
        </div>
    );
}

export default Home;