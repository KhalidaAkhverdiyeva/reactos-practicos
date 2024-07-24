import React from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <nav className="bg-navbarbg p-4">
    <div className="container mx-auto flex justify-between items-center">
     
      <Link to="/" className="text-white text-2xl font-bold">Navbar</Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/About" className="text-white hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/Blog" className="text-white hover:text-gray-300">Blog</Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default CustomNavbar