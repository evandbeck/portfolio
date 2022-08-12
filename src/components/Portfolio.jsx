import React from 'react';
import ProjectCard from './ProjectCard';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';

const projects = [
  {
    name: "/white-label-forum",
    description: "/white-label forum is a private, decentralized forum created for small communities, allowing users to post and collaborate together.",
    image: "",
    github: "https://github.com/evandbeck/white-label-forum",
    demo: "https://www.loom.com/share/536cd03fd38243509e1f6602c13e489f",
    techStack: [
      "React",
      "Rails",
      "PostgreSQL",
      "CSS3"
    ]
  },
  {
    name: "Movie Reviews",
    description: "Movie Reviews was built with movie fans in mind, who want to share their thoughts and critiques on their favorites.",
    image: "",
    github: "https://github.com/evandbeck/movie-reviews",
    demo: "https://www.loom.com/share/c975fc04eb3c4455824236d83d5d7ab8",
    techStack: [
      "React",
      "Local JSON",
      "CSS3"
    ]
  },
  {
    name: "Movie Reviews",
    description: "Movie Reviews was built with movie fans in mind, who want to share their thoughts and critiques on their favorites.",
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

const displayProjects = projects.map(project => <ProjectCard key={project.index} {...project}/>)

function Projects() {
  return (
    <div>
      <Button variant="secondary">Development Portfolio</Button>
      <Container className="d-flex align-items-center justify-content-center">
        <Row>
          {displayProjects}
        </Row>
      </Container>
    </div>
  )
}

export default Projects