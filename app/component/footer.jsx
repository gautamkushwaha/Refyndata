import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 py-14 z-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-40">
          {/* Column 1 */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Refyndata</h3>
            <p className="text-sm">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>

          {/* Column 2 */}
          <div className="mb-4 md:mb-0 ">
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <div className="flex flex-col">
              <a href="#" className="text-blue-500 mb-2">About Us</a>
              <a href="#" className="text-blue-500 mb-2">Services</a>
              <a href="#" className="text-blue-500 mb-2">Clients</a>
              <a href="#" className="text-blue-500">Career</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="mb-4 md:mb-0 ">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className='mb-2'>Email: info@gmail.com</p>
            <p className='mb-2'>Contact: +91898888</p>
            <a href="#" className="text-blue-500 mb-2 ">Write to Us</a>
          </div>


          {/* Column 4 */}
          <div className="mb-4 md:mb-0 ">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="">
              <a href="#" className="text-blue-500 block mb-2">Twitter</a>
              <a href="#" className="text-blue-500 block mb-2">LinkedIn</a>
              <a href="#" className="text-blue-500 block">Facebook</a>
            </div>
          </div>

        </div>
        {/* Line below the footer */}
        <div className="border-t border-gray-600 my-4"></div>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-xs">Refyndata @ 2024 All rights reserved</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 text-xs">Terms and Conditions</a>
              <a href="#" className="text-blue-500 text-xs">Privacy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
