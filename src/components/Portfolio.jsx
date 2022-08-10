import React from 'react';
import ProjectCard from './ProjectCard';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const projects = [
  {
    name: "/white-label-forum",
    description: "",
    image: "",
    github: "https://github.com/evandbeck/white-label-forum",
    demo: "https://www.loom.com/share/536cd03fd38243509e1f6602c13e489f",
    techStack: [
      "React",
      "JavaScript",
      "Ruby",
      "Rails",
      "PostgreSQL",
      "CSS3"
    ]
  },
  {
    name: "Movie Reviews",
    description: "",
    image: "",
    github: "https://github.com/evandbeck/movie-reviews",
    demo: "https://www.loom.com/share/c975fc04eb3c4455824236d83d5d7ab8",
    techStack: [
      "React",
      "JavaScript",
      "Local JSON",
      "CSS3"
    ]
  }
]

const displayProjects = projects.map(project => <ProjectCard {...project}/>)

function Projects() {
  return (
    <div>
      <p>Development Portfolio</p>
      <Container>
        <Row>
            {displayProjects}
        </Row>
      </Container>
    </div>
  )
}

export default Projects