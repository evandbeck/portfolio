import React from 'react';
import { Button } from "react-bootstrap";

function Navbar() {

  const handleClick = () => {
    window.open("https://github.com/evandbeck");
  };

  return (
    <div className="Navbar">
      <Button onClick={handleClick}>GitHub</Button>
      <Button>LinkedIn</Button>
      <Button>Resume</Button>
    </div>
  )
}

export default Navbar