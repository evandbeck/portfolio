import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectCard({name, github, demo, techStack}) {

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Header as="h4">{name}</Card.Header>
          <div>{techStack}</div>
          <Card.Footer>
            <Button href={github}>GitHub</Button>
            <Button href={demo}>View Demo</Button>
          </Card.Footer>
        </Card>
        </Col>
    </Row>
  )
}

export default ProjectCard