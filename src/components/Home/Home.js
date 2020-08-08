import React from 'react';
import Typist from 'react-typist';
import LightSpeed from 'react-reveal/LightSpeed';
import './Home.css';

function Home(props) {
    return (
        <div className="home">
            <div className="homeText">
                <LightSpeed>

            <h1 className='name'>TARUN THOTA</h1>
                </LightSpeed>
            <center>
            <Typist cursor={{ hideWhenDone: true,hideWhenDoneDelay: 0 }}>
                <span className="stack"> Front End Developer</span>
                <Typist.Backspace style={{color:"white"}} count={19} delay={200} />
                <span className="stack"> Back End Developer</span>
                <Typist.Backspace count={20} delay={200} />
                <span className="stack"> Full-Stack Developer</span>
            </Typist>
            </center>
            
            </div>
            
        </div>
    );
}

export default Home;