import { useState } from 'react';
import servicesData from '@/data/services.json';
import RootLayout from '@/app/layout';
import Image from "next/image";

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData.services[0]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <RootLayout>
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-md font-bold">Home / Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
          {/* Table of Contents (Left Column) */}
         
          <div className="md:col-span-1 "> 
          <div className='w-full border border-gray-400 rounded-md'>
          <p className="text-2xl px-5 py-3 font-bold">Services:</p>
            <table className="w-full  ">
           
              <tbody>
                {servicesData.services.map((service, index) => (
                  <tr key={index} onClick={() => handleServiceSelect(service)} className="cursor-pointer hover:bg-gray-200">
                    <td className="px-7 py-2 font-semibold">{service.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
          {/* Content (Right Column) */}
          <div className="md:col-span-2">
            <div>
              <h2 className='text-3xl font-bold text-gray-800'>Services</h2>
              <p className="border-t border-gray-600 my-3"></p>
              <h3 className="text-2xl font-bold mb-2">{selectedService.topic}</h3>
              <p className='w-full font-regular font text-lg'>{selectedService.special_line}</p>
              <Image src={selectedService.image} alt={selectedService.topic} className="w-[400px] my-5 rounded-sm" />
              <p className='w-full font-regular font text-lg'>{selectedService.description.paragraph1}</p>
              <br/>
              <p className='w-full font-regular font text-lg' >{selectedService.special_line2}</p>
            <ul className='mb-5'>
                {selectedService.points.map((point, index) => (
                  <li key={index} className='text-lg '>{point} </li>
                ))}
              </ul>
              <p className='w-full font-regular font text-lg'>{selectedService.description.paragraph2}</p>
              <br />
              <p className='w-full font-regular font text-lg'>{selectedService.description.paragraph3}</p>
              
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Services;
