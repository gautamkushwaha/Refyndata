import React from "react";
import styles from "../styles/Contact.module.css";
import RootLayout from "@/app/layout";
import Image from "next/image";

export default function Contact() {
  return (
    <RootLayout>
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-md font-bold">Home / Contact Us</h1>
        </div>
        <div className="mb-10">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <div className="border border-gray-300 my-2"></div>
          </div>
          <p className="text-lg">
            Begin the Dialogue<br></br>
            Thank you for reaching out to us. Please complete the email form,
            submit it, and we will get back to you at our earliest convenience.
          </p>
        </div>

        {/* email and phone contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phone number */}
          <div className="flex items-center">
            <Image
              src="/contact_us/phone.png"
              alt="Description of your image"
              width={16}
              height={16}
            />

            <span className="ml-2">+1 301-591-0989 ext: 403</span>
          </div>
          {/* Email */}
          <div className="flex items-center">
            <Image
              src="/contact_us/email.png"
              alt="Description of your image"
              width={20}
              height={20}
            />
            <span className="ml-2">info@refyndata.com</span>
          </div>
          {/* Empty column */}
          <div></div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
        {/* Image (Mobile first) */}
        {/* <div className="md:hidden">
                        <Image src="https://Image.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?size=626&ext=jpg&ga=GA1.1.494848340.1707655365&semt=ais" alt="Contact Us" className="w-full rounded-lg shadow-md" />
                    </div> */}
        {/* Form */}
        {/* <div className="border p-4">
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
                    </div> */}
        {/* Image (Tablet and Desktop) */}
        {/* <div className="hidden md:block">
                        <Image src="https://Image.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?size=626&ext=jpg&ga=GA1.1.494848340.1707655365&semt=ais" alt="Contact Us" className="w-full rounded-lg shadow-md" />
                    </div>
                </div> */}

        {/*  Address and location*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 mt-5">
          <div>
            <Image
              src="/contact_us/virginia_meryland.jpeg"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2"
            />
            <p className="text-xl font-semibold">Registered Office:</p>
            <p className="text-sm font-semibold">Clarksburg, West Virginia</p>
            <p className="text-sm">
            11504 ELKHORN DRIVE,CLARKSBURG-MD-20871{" "}
            </p>
          </div>
          <div>
            <Image
              src="/contact_us/cororate.png"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2"
            />
            <p className="text-xl font-semibold">Corporate Office:</p>
            <p className="text-sm font-semibold">Herndon,Virginia</p>
            <p className="text-sm">
            13800 Coppermine RD Suite #162,Herndon,VA-20171{" "}
            </p>
          </div>
          <div>
            <Image
              src="/contact_us/visakhapatnam.png"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2"
            />
            <p className="text-xl font-semibold">Innovative Center:</p>
            <p className="text-sm font-semibold">Visakhapatnam</p>
            <p className="text-sm">
              A-hub, Andhra University incubation center,<br></br> AU North
              Campus, Visakhapatnam, AP-530003{" "}
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
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
//           <Image src="/contact_us_image.jpg" alt="Contact Us" className="w-full rounded-lg shadow-md" />
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
//           <Image src="/contact_us_image.jpg" alt="Contact Us" className="w-full rounded-lg shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUsPage;
