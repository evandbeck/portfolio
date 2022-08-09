import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
        <Link className="NavbarLink" to="/">Home</Link>
        <Link className="NavbarLink" to="/about">About</Link>
        <Link className="NavbarLink" to="/projects">Projects</Link>
    </div>
  )
}

export default Navbar