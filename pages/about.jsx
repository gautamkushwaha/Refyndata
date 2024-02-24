import React from 'react';
import RootLayout from '@/app/layout';

const About = () => {
    const topicsAndDescriptions = [
        {
            topic: 'Our core offering',
            description: 'Our core offering: We help top companies build high-performing IT teams.'
        },
        {
            topic: 'Target Audience',
            description: 'We assist startups undergoing rapid expansion in their engineering teams, along with mid-sized businesses and enterprises managing tight deadlines and resource constraints'
        },
        {
            topic: 'Who We Are',
            description: 'Refyndata has delivered thousands  of solutions to over 1000+ satisfied customers, earning us consecutive years of profitable growth.'
        },
        {
            topic: 'Our Solutions',
            description: "Portfolio Management, Mobile Application Development, and Computer System Validation (CSV), have been effectively implemented for State Government clients as well as midsize to small organizations. Our success is attributed to our comprehensive project life-cycle methodology, reflecting our extensive experience and adherence to recognized best practices. We integrate business and technical excellence, along with expertise in best-of-breed technology and industry-specific knowledge, to consistently meet and exceed customer expectations. At Refyndata, we are a team of dedicated professionals committed to excellence in staffing, recruiting, and employee management. Our recent rapid expansion has led to several advancements, enhancing our ability to serve both clients and employees. Throughout these changes, we have maintained the 'family feel' that encourages candidates to return to us during their job search and for clients to rely on us for their IT staffing needs."
        },
        {
            topic: 'Business Achievement ',
            description: "This empowers us to comprehend user viewpoints and ensure that our solutions achieve our customers' business goals, key metrics, and critical success factors."
        },
        {
            topic: 'Technical Expertise',
            description: 'We consistently and cost-effectively implement solutions that enable our customers to maximize their investment'
        },
        {
            topic: 'Mastery of Cutting-Edge Technology',
            description: 'We utilize our expertise in top-tier vendor software products, maximizing technology to address our customers challenges.'
        },
        {
            topic: 'Sector-specific Experience',
            description: "Our extensive industry knowledge and experience empower us to design, construct, and execute solutions that thoroughly fulfill customers' particular business needs."
        },
        
    ];

    return (
        <RootLayout>
            <div className="container mx-auto p-4">
                <div className="mb-10">
                    <h1 className="text-md font-bold">Home / About Us</h1>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
                    {/* Table (Mobile first) */}
                    <div className="col-span-1">
                        <div className="w-full p-5 border border-rounded">
                            <p className="px-5 py-3 pb-5 font-semibold">Contents</p>
                            <table className="w-full">
                                <tbody>
                                    {topicsAndDescriptions.map(({ topic }, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-2">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Description (Desktop and Tablet) */}
                    <div className="hidden md:block col-span-2">
                        <h3 className='text-3xl font-bold'>About Us</h3>
                        <div className="border-t border-gray-600 my-4"></div>
                        <p>Refyn Data empowers businesses with the perfect IT talent and data-driven solutions, offering unbeatable value for both government and private clients. Our expert consultants combine top-notch technical skills with deep industry knowledge, and go beyond mere project delivery. We become trusted partners, tailoring solutions to your specific needs and project environment. Think of us as your secret weapon, unlocking hidden potential and propelling your business forward.</p>
                        {topicsAndDescriptions.map(({ topic, description }, index) => (
                            <div key={index} className="mb-4"> 
                       
                                <h2 className="text-xl font-semibold mb-2">{topic}</h2>
                                {topic === 'Our Solutions' ? (
                                    <>
                                        <p>{description.split('. ')[0] + '.'}</p>
                                        <br/>
                                        <p>{description.split('. ')[1] + '.'}</p>
                                        <br/>
                                        <p>{description.split('. ')[2]}</p>
                                    </>
                                ) : (
                                    <p>{description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};

export default About;
