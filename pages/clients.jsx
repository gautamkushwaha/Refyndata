// ClientSection.js
import { useEffect, useState } from 'react';
import RootLayout from "@/app/layout";

const logos = [
  { name: 'Client 1', logo: '/client.png', alt: 'Client 1 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  { name: 'Client 2', logo: '/client.png', alt: 'Client 2 Logo' },
  
];

const ClientSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numCols = windowWidth > 768 ? 4 : 2; // Change to 768 for tablet breakpoint

  return (
    <RootLayout>
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <h1 className="text-md font-bold">Home / Clients</h1>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Clients</h2>
        <hr className="border-b-2 border-gray-400 mx-auto w-32" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo.logo} alt={logo.alt} className="max-h-24 md:max-h-32" />
          </div>
        ))}
      </div>
    </div></RootLayout>
  );
};

export default ClientSection;
