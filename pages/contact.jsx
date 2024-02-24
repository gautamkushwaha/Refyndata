import React from "react";
import styles from '../styles/Contact.module.css'
import RootLayout from "@/app/layout";

export default function Contact() {
    return (
        <RootLayout>
            <div className="container mx-auto p-4">
                <div className="mb-10">
                    <h1 className="text-md font-bold">Home / Contact Us</h1>

                </div>
                <div className="mb-4">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold">Contact Us</h1>
                        <div className="border border-gray-300 my-2"></div>
                    </div>
                    <p className="text-lg">Begin the Dialogue<br></br>
                        Thank you for reaching out to us. Please complete the email form, submit it, and we will get back to you at our earliest convenience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Image (Mobile first) */}
                    <div className="md:hidden">
                        <img src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?size=626&ext=jpg&ga=GA1.1.494848340.1707655365&semt=ais" alt="Contact Us" className="w-full rounded-lg shadow-md" />
                    </div>
                    {/* Form */}
                    <div className="border p-4">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full border rounded-md p-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact" className="block mb-1">Contact</label>
                                <input type="text" id="contact" name="contact" className="w-full border rounded-md p-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full border rounded-md p-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full border rounded-md p-2"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                        </form>
                    </div>
                    {/* Image (Tablet and Desktop) */}
                    <div className="hidden md:block">
                        <img src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?size=626&ext=jpg&ga=GA1.1.494848340.1707655365&semt=ais" alt="Contact Us" className="w-full rounded-lg shadow-md" />
                    </div>
                </div>

                {/*  Address and location*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 mt-20">
                <div>
                        <img src="vizak.webp" alt="nnovative Cente" className=" w-60 h-40 rounded-lg shadow-md mb-2" />
                        <p className="text-xl font-semibold">Innovative Center</p>
                        <p className="text-sm font-semibold">Visakhapatnam</p>
                        <p className="text-sm">A-hub, Andhra University incubation center,<br></br> AU North Campus, Visakhapatnam, AP-530003 </p>
                    </div>
                    <div>
                        <img src="vizak.webp" alt="nnovative Cente" className=" w-60 h-40 rounded-lg shadow-md mb-2" />
                        <p className="text-xl font-semibold">Innovative Center</p>
                        <p className="text-sm font-semibold">Visakhapatnam</p>
                        <p className="text-sm">A-hub, Andhra University incubation center,<br></br> AU North Campus, Visakhapatnam, AP-530003 </p>
                    </div>
                    <div>
                        <img src="vizak.webp" alt="nnovative Cente" className=" w-60 h-40 rounded-lg shadow-md mb-2" />
                        <p className="text-xl font-semibold">Innovative Center</p>
                        <p className="text-sm font-semibold">Visakhapatnam</p>
                        <p className="text-sm">A-hub, Andhra University incubation center,<br></br> AU North Campus, Visakhapatnam, AP-530003 </p>
                    </div>
                </div>
            </div>   
        </RootLayout>
    )
}

// import React from 'react';

// const ContactUsPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="mb-4">
//         <h1 className="text-2xl font-bold">Home / Contact Us</h1>
//         <div className="border-b-2 border-gray-300 my-2"></div>
//       </div>
//       <div className="mb-4">
//         <p className="text-lg">Get in touch with us for any inquiries or feedback.</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Image (Mobile first) */}
//         <div className="md:hidden">
//           <img src="/contact_us_image.jpg" alt="Contact Us" className="w-full rounded-lg shadow-md" />
//         </div>
//         {/* Form */}
//         <div className="border p-4">
//           <form>
//             <div className="mb-4">
//               <label htmlFor="name" className="block mb-1">Name</label>
//               <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md p-2" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="contact" className="block mb-1">Contact</label>
//               <input type="text" id="contact" name="contact" className="w-full border-gray-300 rounded-md p-2" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block mb-1">Email</label>
//               <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md p-2" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block mb-1">Message</label>
//               <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md p-2"></textarea>
//             </div>
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
//           </form>
//         </div>
//         {/* Image (Tablet and Desktop) */}
//         <div className="hidden md:block">
//           <img src="/contact_us_image.jpg" alt="Contact Us" className="w-full rounded-lg shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUsPage;
