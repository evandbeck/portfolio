import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: "/white-label-forum",
    github: "https://github.com/evandbeck/white-label-forum",
    description: "",
    image: "",
    demo: "https://www.loom.com/share/536cd03fd38243509e1f6602c13e489f",
    techStack: [
      "React",
      "JavaScript",
      "Ruby",
      "Rails",
      "PostgreSQL",
      "CSS"
    ]
  },
  {
    name: "Movie Reviews",
    github: "https://github.com/evandbeck/movie-reviews",
    description: "",
    image: "",
    demo: "https://www.loom.com/share/c975fc04eb3c4455824236d83d5d7ab8",
    techStack: [
      "React",
      "JavaScript",
      "Local JSON",
      "CSS"
    ]
  }
]

const displayProjects = projects.map(project => <ProjectCard {...project}/>)

function Projects() {
  return (
    <div>
      <p>Here are some of my projects.</p>
      {displayProjects}
    </div>
  )
}

export default Projects