import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './CardComponent.css';



function CardComponent(props) {
    return (
        <Card raised={true} style={{float:"left"}}>
    <Image src={props.image} wrapped ui={true} />
    <Card.Content className="cardContent">
      <Card.Header className="projectName">{props.name}</Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
    );
}

export default CardComponent;