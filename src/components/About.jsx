import React from 'react';
import Button from "react-bootstrap/Button";

function About() {

  const techStack = ["JavaScript", "React", "Ruby", "Rails", "HTML5", "CSS3", "Bootstrap", "git"]

  const stack = techStack.map(language => <Button size="sm" className="m-1">{language}</Button>)

  return (
    <div className="About">
      <div>I love to learn and build cool things.</div>
      {stack}
    </div>
  )
}

export default About