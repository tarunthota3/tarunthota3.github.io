import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import './CardComponent.css';



function CardComponent(props) {
    return (
        <Card raised={true} style={{float:"left"}} onClick={()=>window.open(props.link, '_blank')}>
    <Image src={props.image} wrapped ui={true} />
    <Card.Content className="cardContent">
      <Card.Header className="projectName">
      <a href={props.link} rel="noopener noreferrer" target="_blank" className="viewProjectLink">
        {props.name}
        </a>
        </Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
    );
}

export default CardComponent;