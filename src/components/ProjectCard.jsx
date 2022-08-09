import React from 'react';
import { Card } from "react-bootstrap";

function ProjectCard({name, github, demo, techStack}) {

  return (
    <div>
      <div>{name}</div>
      <div>{github}</div>
      <div>{demo}</div>
      <div>{techStack}</div>
    </div>
  )
}

export default ProjectCard