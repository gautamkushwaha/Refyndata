// // components/Navbar.js
// 'use client'
// import React, { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white py-4 sticky top-0 z-200 shadow-sm ">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <p className="text-black text-xl font-bold">Your Logo</p>
//         </Link>
        
//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button className="text-black" onClick={toggleMenu}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="5 5 20 20"
//               stroke="currentColor"
//             >
//               <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
//             </svg>
//           </button>
//         </div>
        
//         {/* Mobile menu items */}
//         <div className={` md:items-center md:space-x-4 md:flex-row md:flex-1 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//           <div className="flex flex-col space-y-4">
//             <Link href="/">
//               <p className="text-black w-[24px]" onClick={toggleMenu}>Home</p>
//             </Link>
//             <Link href="/about">
//               <p className="text-black" onClick={toggleMenu}>About Us</p>
//             </Link>
//             <Link href="/services">
//               <p className="text-black" onClick={toggleMenu}>Services</p>
//             </Link>
//             <Link href="/clients">
//               <p className="text-black" onClick={toggleMenu}>Clients</p>
//             </Link>
//             <Link href="/career">
//               <p className="text-black" onClick={toggleMenu}>Careers</p>
//             </Link>
//             <Link href="/contact">
//               <p className="text-black" onClick={toggleMenu}>Contact</p>
//             </Link>
//           </div>
//         </div>

//         {/* Desktop menu items */}
//         <div className="hidden md:flex space-x-4">
//           <Link href="/">
//             <p className="text-black">Home</p>
//           </Link>
//           <Link href="/about">
//             <p className="text-black">ABout Us</p>
//           </Link>
//           <Link href="/services">
//             <p className="text-black">Services</p>
//           </Link>
//           <Link href="/clients">
//             <p className="text-black">Clients</p>
//           </Link>
//           <Link href="/career">
//             <p className="text-black">Careers</p>
//           </Link>
//           <Link href="/contact">
//             <p className="text-black">Contact</p>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js
"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-40 w-auto" src="/logo.png" alt="Logo" />
            <img className="hidden lg:block h-40 w-auto" src="/logo.png" alt="Logo" />
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
