import React from 'react';

const HeroSection = () => {
  return (
    <div className=" mt-2 py-20 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Column 1 */}
        <div className="md:w-3/5 mb-8 md:mb-0 md:mr-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Empowering Success Through Expert IT Talent – Your Gateway to Innovation and Efficiency!</h1>
          <div className="md:hidden mb-4">
            <img src="RefyndataHero.svg" alt="Image" className="w-40 md:w-full" />
          </div>
          <p className="text-lg md:text-xl mb-6 w-[75%]">Let's face it, traditional IT can be slow and fragmented. Refyn Data disrupts this by uniting specialists – analysts, developers, and testers – in one dynamic hub. Imagine your project needs met swiftly, communication flowing effortlessly, and solutions delivered with exceptional quality. Experience the Refyn Data difference.</p>
          <button className="bg-[#0079A0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
        {/* Column 2 */}
        <div className="md:w-2/5 hidden md:block">
          <img src="RefyndataHero.svg" alt="Image" className="w-full" />
        </div>
      </div>
    </div>
   
  );
};

export default HeroSection;
