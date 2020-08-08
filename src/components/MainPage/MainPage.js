import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import AboutMe from '../AboutMe/AboutMe';
import TechnicalSkills from '../TechnicalSkills/TechnicalSkills';
import Projects from "../Projects/Projects";
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import './MainPage.css';

function MainPage() {
  const [ color, setColor ] = useState('unset');
  const SEL = 'custom-section';
  const SECTION_SEL = `.${SEL}`;
  const onLeave =(origin, destination, direction) => {
    if(destination.index == 0 || destination.index == 4){
        setColor('unset');
    }
    else{
        setColor('black');
    }
  }


  return (
    <div>
        <HeaderComponent color={color}/>
        <ReactFullpage
          navigation
          anchors={['home','aboutMe', 'technicalSkills', 'projects', 'contact']}
          sectionSelector={SECTION_SEL}
          onLeave={onLeave}
          render={comp => (
            <ReactFullpage.Wrapper>
              <div className={SEL}>
                <Home/>
              </div>
              <div className={SEL}>
                <AboutMe/>
              </div>
              <div className={SEL}>
                <TechnicalSkills/>
              </div>
              <div className={SEL}>
                <Projects/>
              </div>
              <div className={SEL}>
                <Contact/>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
  );
}

export default MainPage;
