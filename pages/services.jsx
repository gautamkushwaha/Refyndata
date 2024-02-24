import { useState } from 'react';
import servicesData from '@/data/services.json';
import RootLayout from '@/app/layout';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Table (Mobile first) */}
          <div className="md:hidden col-span-1">
            <table className="table-auto">
              <tbody>
                {servicesData.services.map((service, index) => (
                  <tr key={index} onClick={() => handleServiceSelect(service)} className="cursor-pointer hover:bg-gray-200">
                    <td className="border px-4 py-2">{service.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Content (Desktop and Tablet) */}
          <div className="hidden md:block col-span-2">
            <div className="flex">
              {/* Left Column (30%) */}
              <div className="w-1/3 pr-4">
                <table className="table-auto">
                  <tbody>
                    {servicesData.services.map((service, index) => (
                      <tr key={index} onClick={() => handleServiceSelect(service)} className="cursor-pointer hover:bg-gray-200">
                        <td className="border px-4 py-2">{service.topic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Right Column (70%) */}
              <div className="w-full">
                
                <div>
                  <h2 className='text-3xl font-bold text-gray-800'>Services</h2>
                  <p className="border-t border-gray-600 my-3"></p>
                

                  <h3 className="text-xl font-semibold mb-2"> {selectedService.topic}</h3>  
                  <img src={selectedService.image} alt={selectedService.topic} className="w-1/2 " />
                  <p className=' w-full font-regular font text-lg'>{selectedService.description.paragraph1}</p>
                  
                  <br />
                  <p className=' w-full font-regular font text-lg'>{selectedService.description.paragraph2}</p>
                  <br />
                  <p className=' w-full font-regular font text-lg'>{selectedService.description.paragraph3}</p>
                  <ul>
                    {selectedService.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Services;
