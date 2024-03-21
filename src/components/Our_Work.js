import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import React from 'react';

// Component for individual projects or outreaches
const ProjectCard = ({ title, description }) => (
  <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-sky-600 bg-opacity-50 m-4">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-white text-base">{description}</p>
    </div>
  </div>
);

// Main component for the Our Work page
const OurWork = () => {
  return (
    <div>
        <Navbar/>
        <div className="header text-black px-6 lg:px-24 py-4 bg-[url('./images/bg7.jpg')] bg-no-repeat bg-cover bg-center space-y-2">
            <section className="bg-[url('./images/bg8.jpg')] bg-no-repeat bg-cover bg-center bg-opacity-30 rounded-3xl py-2">
                <div className="container mx-auto px-6">
                    <h1 className="text-center text-2xl lg:text-4xl font-extrabold text-gray-800 mb-8">
                    Our Initiatives
                    </h1>
                    <div className="flex flex-wrap justify-center">
                    <ProjectCard
                        title="Financial Empowerment"
                        description="Providing microfinance loans, financial literacy workshops, and investment training to foster growth and prosperity."
                    />
                    <ProjectCard
                        title="Agricultural Development"
                        description="Supporting modern farming techniques and equipment to enhance productivity and ensure food security."
                    />
                    <ProjectCard
                        title="Community Outreach"
                        description="Directly addressing the needs of the community by distributing foodstuffs and offering cash assistance."
                    />
                    <ProjectCard
                        title="Idjerhe Kingdom Outreach"
                        description="Focused support for old women and widows in Ethiope West, Delta State, Nigeria, ensuring access to resources and care."
                    />
                    {/* Add more ProjectCard components as needed */}
                    </div>
                </div>
            </section>
        </div>
        <FootBar/>
    </div>
    
  );
};

export default OurWork;


