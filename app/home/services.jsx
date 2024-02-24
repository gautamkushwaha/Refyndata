import React from 'react';

export default function ServiceSection() {
  return (
    <section className="pb-100 py-12 ml-50 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">We Expertise On This Field</h2>
        <p className="text-gray-600 mt-2 px-50 w-[40%] text-center mx-auto pb-10">
        More than just services, we're your partner. We collaborate with you to understand your unique needs and deliver customized solutions that drive real results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-40 ">
          {/* Service Card 1 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 4 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 5 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 6 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>
        </div>
      </div>
    </section>
  );
};


