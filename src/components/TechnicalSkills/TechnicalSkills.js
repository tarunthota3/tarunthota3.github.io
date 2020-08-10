import React from 'react';
import "./TechnicalSkills.css"
import {Polar} from 'react-chartjs-2';
import SkillSet from './SkillSet.json';


// const data = {
//   labels: SkillSet.label,
//   datasets: [
//     {
//       label: 'Level',
//       borderSkipped: false,
//       backgroundColor: '#0078ff',
//       borderColor: '#0078ff',
//       borderWidth: 1,
//       hoverBackgroundColor: '#0078ff',
//       hoverBorderColor: '#0078ff',
//       data: SkillSet.values
//     }
//   ]
// };


const data = {
  datasets: [{
    data: SkillSet.values,
    backgroundColor: SkillSet.colors,
    label: 'My dataset' // for legend
  }],
  labels: SkillSet.label
};

const legend = {
  display: true,
  position: 'bottom',
  fullWidth: true,
  reverse: false,
  labels: {
    boxWidth:12
  }
}

const options = {
  legend: legend
}

function TechnicalSkills(props) {
    return (
        <div className="technicalSkills">
          <div class="technicalSkillsParent">
        <div className="techStackContent">
        <span className="tsText">Technical Skills</span>
          <p className="tsContent">
            <span className="ts">
              I have been working on developing production grade Web Applications using Mongo, ExpressJS, ReactJS and NodeJS(MERN). I am also well versed in building Mobile Applications using React Native and Android Studio.
              I had been challenged even on Visualization tools which led me to get well experience on D3 JS and Neo4J.  
            </span>
            <br/>
            <span className="ts1">
              With a zeal to explore on how to host Web and Android Applications, I had an opportunity to explore some of the cloud services such as AWS, Heroku.
            </span>
            <br/>
            <span className="ts1">
              I have written and integrated Python scripts which processes the data and interacts back with the web application.
            </span>
            <span className="ts1">
              My current interest lie in the field of data science concentration at UNCC.
            </span>
          </p>
        </div>
        <div className="chartDiv">
              <Polar data={data} options={options} />
          </div>
      </div>
    </div>
    );
}

export default TechnicalSkills;