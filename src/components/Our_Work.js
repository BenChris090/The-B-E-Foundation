import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import React from 'react';

// Component for individual projects or outreaches
const ProjectCard = ({ title, description, date }) => (
  <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-sky-600 bg-opacity-50 m-4">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title} <br /> {date}</div>
      <p className="text-white text-base">{description}</p>
    </div>
  </div>
);

const workData = [
  {
    title: 'Promoting Equality in the Niger Delta',
    description: 'Supporting gender equality initiatives and empowering women, men, girls, boys, and the elderly across the broader Niger Delta region of Nigeria through education and economic opportunities.',
    date: '08/03/2022' // Generated date,
  },
  {
    title: 'Agricultural Advancement',
    description: 'Promoting sustainable farming practices and providing resources to boost agricultural productivity and food security.',
    date: '15/06/2022' // Generated date
  },
  {
    title: 'Health and Nutrition',
    description: 'Improving health outcomes by providing access to nutritious food, clean water, and healthcare services.',
    date: '29/09/2022' // Generated date
  },
  {
    title: 'Economic Development',
    description: 'Fostering economic growth by offering microfinance loans, business training, and support for small enterprises.',
    date: '12/11/2022' // Generated date
  },
  {
    title: 'Idjerhe Kingdom Outreach',
    description: 'Providing support to old women and widows in Ethiope West, Delta State, Nigeria, ensuring they have access to the resources and care they need.',
    date: '14/12/2023' // Specified date
  },

  // Add more entries as needed
];


// Main component for the Our Work page
const OurWorkSection = ({ title, description, date }) => (
  <div className="max-w-md mx-auto bg-green-600 bg-opacity-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
    <div className="md:flex">
      <div className="p-8">
        <div className="tracking-wide text-2xl lg:text-3xl text-white font-bold">{title} <br /> {date}</div>
        <p className="mt-2 text-white text-lg lg:text-xl">{description}</p>
      </div>
    </div>
  </div>
);

const OurWork = () => {
  return (
    <div className="about h-full">
      <Navbar/>
      <div className="bg-[url('./images/bg8.jpg')] bg-no-repeat bg-cover bg-center min-h-screen p-5">
        <div className="text-center text-3xl lg:text-5xl font-bold my-5 text-sky-600">Our Work</div>
        <div className="space-y-4">
          {workData.map((work, index) => (
            <OurWorkSection key={index} title={work.title} description={work.description} />
          ))}
        </div>
        </div>
      <FootBar/>
    </div>
  );
};

export default OurWork;
