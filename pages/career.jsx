
import { useState } from 'react';
import careersData from '@/data/careers.json';
import RootLayout from '@/app/layout';
import axios from 'axios';


const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(careersData.careers[0]);
  const [formData, setFormData] = useState({
    name: '',
    contact:'',
    email: '',
    qualification:'',
    message: '',
  });
  const [file, setFile] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      const selectedFile = e.target.files[0];
      // Validate file size (not exceeding 4MB)
      if (selectedFile && selectedFile.size > 4 * 1024 * 1024) {
        alert("File size should not exceed 4MB.");
        return; // Stop the function if validation fails
      }
      // Validate file type (must be a text file)
      if (selectedFile && (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg" || selectedFile.type === "image/jpg")) {
        alert("Image files are not allowed.");
        return; }// Stop the function if validation fails
      // If validations pass, update the file state
      setFile(selectedFile);
    } else {
      // Handle other inputs normally
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('contact',formData.contact);
    data.append('email', formData.email);
    data.append('qualification',formData.qualification);
    data.append('message', formData.message);
    
    if (file) {
      data.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:5000/send', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Form submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('There was an error sending the form:', error);
      alert('There was an error sending the form.');
    }
  };

  // Function to check if the file type is valid
  const isFileTypeValid = (file) => {
    const allowedTypes = ['application/msword', 'application/pdf', 'text/plain'];
    return allowedTypes.includes(file.type);
  };
  

  return (
    <RootLayout>
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-md font-bold">Home / Careers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Table (Mobile first) */}
          {/*  <div className="w-full p-5 border border-rounded">
                            <p className="px-5 py-3 pb-5 font-semibold">Contents</p> */}
          <div className="border md:hidden col-span-1"> 
          <div className="w-full p-5 border border-rounded">
          <p className="px-5 py-3 pb-5 font-semibold">Contents</p>
            <table className="  table-auto"> 
           
              <tbody>
                  
                {careersData.careers.map((job, index) => (
                  <tr key={index} onClick={() => handleJobSelect(job)} className="cursor-pointer hover:bg-gray-200">
                 
                    <td className=" px-4 py-2">{job.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div></div>
          {/* Content (Desktop and Tablet) */}
          <div className="hidden md:block col-span-2">
            <div className="flex ">
              {/* Left Column (30%) */}
              <div className=" w-1/3 p-4 m-5"> 
              <div className='border '>
              <p>contents</p>
                <table className="table-auto">
                  <tbody>
                 
                    {careersData.careers.map((job, index) => (
                      <tr key={index} onClick={() => handleJobSelect(job)} className="cursor-pointer hover:bg-gray-200"> 
                     
                        <td className=" px-4 py-2">{job.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
              {/* Right Column (70%) */}
              <div className="w-full">
                <div>
                  <h2 className='text-3xl font-bold text-gray-800'>Careers</h2>
                  <p className="border-t border-gray-600 my-3"></p>
                  <h3 className="text-xl font-semibold mb-2">{selectedJob.name}</h3>
                  <p><strong>Location:</strong> {selectedJob.location}</p>
                  <p><strong>Responsibilities:</strong></p>
                  <ul>
                    {selectedJob.responsibilities.map((responsibility, index) => (
                      <li key={index}>• {responsibility}</li>
                    ))}
                  </ul>
                  <p><strong>Minimum Qualification: <br></br></strong> • {selectedJob.minimumQualification}</p>
                  <p><strong>Special Qualifications:</strong></p>
                  <ul>
                    {selectedJob.specialQualifications.map((qualification, index) => (
                      <li key={index}>• {qualification}</li>
                    ))}
                  </ul>
                  <p><strong>Requirements:</strong></p>
                  <ul>
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={index}>• {requirement}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Apply for this position</h3>

                    <a href="mailto:kushwahagautam24@gmail.com">Send your resume at: <br/> <span className='bg-black text-white'>kushwahagautam24@gmail.com</span></a>

                    
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">contact number</label>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">qualification:</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="file">File:</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Careers;



