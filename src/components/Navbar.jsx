import React from 'react';
import Button from "react-bootstrap/Button";

function Navbar() {

  const handleClick = (e) => {
    if (e.target.id === "1") {
      window.open("https://github.com/evandbeck");
    } else if (e.target.id === "2") {
      window.open("https://www.linkedin.com/in/beckevan/");
    } else if (e.target.id === "3") {
      window.open("TBD");
    };
  };

  return (
    <div className="Navbar">
      <Button onClick={handleClick} id="1">GitHub</Button>
      <Button onClick={handleClick} id="2">LinkedIn</Button>
      <Button onClick={handleClick} id="3">Resume</Button>
    </div>
  )
}

export default Navbar