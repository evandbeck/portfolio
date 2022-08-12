import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from 'react-bootstrap/Col';

function ProjectCard({name, description, github, demo, techStack}) {

  const stack = techStack.map(language => <Button key={language.index} size="sm" variant="outline-secondary" className="m-1">{language}</Button>)

  return (
    <Col className="g-4">
      <Card style={{ width: '15rem'}}>
        <Card.Img variant="top" src=""/>
        <Card.Title className="m-2 d-flex align-items-center justify-content-center">{name}</Card.Title>
        <Card.Body>{stack}</Card.Body>
        <Card.Text style={{ height: '10rem'}} size="sm" className="mx-4">{description}</Card.Text>
        <Button variant="secondary" size="sm" className="m-3 d-flex align-items-center justify-content-center">About the Development</Button>
        <Card.Footer>
          <ButtonGroup className="m-1 d-flex align-items-center justify-content-center">
            <Button href={github}>GitHub</Button>
            <Button href={demo}>View Demo</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default ProjectCard