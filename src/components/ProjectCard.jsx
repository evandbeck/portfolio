import React from 'react';
import { Card } from "react-bootstrap";

function ProjectCard({name, github, demo, techStack}) {

  return (
    <Card>
      <div>{name}</div>
      <div>{github}</div>
      <div>{demo}</div>
      <div>{techStack}</div>
    </Card>
  )
}

export default ProjectCard