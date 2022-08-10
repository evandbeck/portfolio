import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ProjectCard({name, description, github, demo, techStack}) {

  const stack = techStack.map(language => <Button size="sm" className="m-1">{language}</Button>)

  return (
          <Card style={{ width: '20rem' }} className="m-1">
            <Card.Img variant="top" src=""/>
            <Card.Header as="h4">{name}</Card.Header>
            <Card.Body>{stack}</Card.Body>
            <Card.Body>{description}</Card.Body>
            <Card.Footer>
              <ButtonGroup className="m-1">
                <Button href={github}>GitHub</Button>
                <Button href={demo}>View Demo</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
  )
}

export default ProjectCard