


// Navbar.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-[#0079A0] font-bold shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image width={100} height={32} src="/navbar/Refyndata_logo.jpg" alt="Logo"/>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex space-x-4">
              <Link href="/" className="hover:bg-gray-200 px-3 py-2 rounded-md">Home</Link>
              <Link href="/about" className="hover:bg-gray-200 px-3 py-2 rounded-md">About</Link>
              <Link href="/services" className="hover:bg-gray-200 px-3 py-2 rounded-md">Services</Link>
              <Link href="/career" className="hover:bg-gray-200 px-3 py-2 rounded-md">Careers</Link>
              <Link href="/clients" className="hover:bg-gray-200 px-3 py-2 rounded-md">Clients</Link>
              <Link href="/contact" className="hover:bg-gray-200 px-3 py-2 rounded-md">Contact Us</Link>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-200"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="hover:bg-gray-200 block px-3 py-2 rounded-md">Home</Link>
          <Link href="/about" className="hover:bg-gray-200 block px-3 py-2 rounded-md">About</Link>
          <Link href="/services" className="hover:bg-gray-200 block px-3 py-2 rounded-md">Services</Link>
          <Link href="/career" className="hover:bg-gray-200 block px-3 py-2 rounded-md">Careers</Link>
          <Link href="/clients" className="hover:bg-gray-200 block px-3 py-2 rounded-md">Clients</Link>
          <Link href="/contact" className="hover:bg-gray-200 block px-3 py-2 rounded-md">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
