// components/AboutUs.js

import React from 'react';

export default function AboutUs() {
  return (
    <section className="bg-[#F2F5F8] py-20">
      <div className="container mx-auto">
        {/* About Us Heading */}
        <div className="text-center mb-8 px-50 pb-5">
          <h2 className="text-3xl font-bold pb-5">What makes us different?</h2>
          <p className="text-gray-600 mt-2 px-50 w-[50%] text-center mx-auto">
            <span>At REFYNDATA</span> IS A BUSINESS PLATFORM BUILT ON SPECIALIZED TECHNOLOGY AND IT-RELATED SERVICES, RUN BY A BUNCH OF SMART, KNOWLEDGEABLE, AND EXPERIENCED PEOPLE.</p>
        </div>

        {/* Read More Link */}
        {/* <div className="text-center mb-8">
          <a href="#" className="text-blue-500 font-semibold text-lg">More about us &gt;</a>
        </div> */}

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className=" overflow-hidden">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="https://img.freepik.com/free-vector/check-mark-three-stars_78370-4450.jpg?size=626&ext=jpg&uid=R117697906&ga=GA1.1.494848340.1707655365&semt=ais" alt="Logo 1" className="w-16 h-16 rounded-full object-cover object-center" />
            </div>
            <div className="m-2 p-4">
              <h3 className="text-xl font-semibold mb-2 text-center">Exclusive Service</h3>
              <p className="text-gray-600 text-center">Take the solution of our cutting edge technology with our expertise solution who are expertise are in the top-tech notch</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" overflow-hidden">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="https://img.freepik.com/free-vector/check-mark-three-stars_78370-4450.jpg?size=626&ext=jpg&uid=R117697906&ga=GA1.1.494848340.1707655365&semt=ais" alt="Logo 1" className="w-16 h-16 rounded-full object-cover object-center" />
            </div>
            <div className="m-2 p-4">
              <h3 className="text-xl font-semibold mb-2 text-center">Exclusive Service</h3>
              <p className="text-gray-600 text-center">Take the solution of our cutting edge technology with our expertise solution who are expertise are in the top-tech notch</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" overflow-hidden">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="https://img.freepik.com/free-vector/check-mark-three-stars_78370-4450.jpg?size=626&ext=jpg&uid=R117697906&ga=GA1.1.494848340.1707655365&semt=ais" alt="Logo 1" className="w-16 h-16 rounded-full object-cover object-center" />
            </div>
            <div className="m-2 p-4">
              <h3 className="text-xl font-semibold mb-2 text-center">Exclusive Service</h3>
              <p className="text-gray-600 text-center">Take the solution of our cutting edge technology with our expertise solution who are expertise are in the top-tech notch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

