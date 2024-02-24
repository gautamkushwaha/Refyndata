// components/Navbar.js
'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-200 shadow-sm ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <p className="text-black text-xl font-bold">Your Logo</p>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-black" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile menu items */}
        <div className={` md:items-center md:space-x-4 md:flex-row md:flex-1 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <p className="text-black" onClick={toggleMenu}>Home</p>
            </Link>
            <Link href="/about">
              <p className="text-black" onClick={toggleMenu}>About Us</p>
            </Link>
            <Link href="/services">
              <p className="text-black" onClick={toggleMenu}>Services</p>
            </Link>
            <Link href="/clients">
              <p className="text-black" onClick={toggleMenu}>Clients</p>
            </Link>
            <Link href="/career">
              <p className="text-black" onClick={toggleMenu}>Careers</p>
            </Link>
            <Link href="/contact">
              <p className="text-black" onClick={toggleMenu}>Contact</p>
            </Link>
          </div>
        </div>

        {/* Desktop menu items */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="text-black">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-black">ABout Us</p>
          </Link>
          <Link href="/services">
            <p className="text-black">Services</p>
          </Link>
          <Link href="/clients">
            <p className="text-black">Clients</p>
          </Link>
          <Link href="/career">
            <p className="text-black">Careers</p>
          </Link>
          <Link href="/contact">
            <p className="text-black">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
