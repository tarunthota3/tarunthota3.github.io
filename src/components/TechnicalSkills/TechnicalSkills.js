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
          <div className="chartDiv">
              <Polar data={data} options={options} />
          </div>
        <div className="techStackContent">
        <span className="tsText">Technical Skills</span>
          <p className="tsContent">
            <span className="ts">
               I am a cerified full stack developer. I have been working on building Web Applications using ReactJS as fron-end, ExpressJS as middleware and NodeJS as backend.
               I also had an working on building Mobile applications using React Native and Android Studio.
            </span>
            <br/>
            <span className="ts1">
                I have also worked on visualization tools such as D3.JS and integrated with databases such as MongoDB and Neo4j.
            </span>
            <br/>
            <span className="ts1">
                I have worked on integrating the built web and android applications with cloud services such as AWS. I have written python ans Node scripts which interacts the services and process and gets back the data, processes it and send it back for further validation.
                Based on my interest I have worked on hosting these applcaitons in IAAS(AWS EC2) server and serverless(AWS Lambda) servers based on the requirements.
            </span>
          </p>
        </div>
      </div>
    </div>
    );
}

export default TechnicalSkills;