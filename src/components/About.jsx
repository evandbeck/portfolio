import React from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {

  const techStack = ["JavaScript", "React", "Ruby", "Rails", "HTML5", "CSS3", "Bootstrap", "git"]

  const stack = techStack.map(language => <Button variant="secondary" size="sm" className="m-1">{language}</Button>)

  return (
    <Container className="my-5">
      <Row>
          <div className="mb-3 d-flex align-items-center justify-content-center">
            I love to learn and build cool things.
          </div>
      </Row>
      <Row>
        <div className="d-flex align-items-center justify-content-center">
          {stack}
        </div>
      </Row>
    </Container>
  )
}

export default About