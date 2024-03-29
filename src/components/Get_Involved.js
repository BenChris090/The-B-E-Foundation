import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import React from 'react';

const involvementOptions = [
  {
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and make a direct impact in the Niger Delta community. Your time and skills can contribute to the empowerment of those in need.',
    date: 'Ongoing'
  },
  {
    title: 'Donate via Bank Transfer',
    description: 'Support our initiatives by making a secure bank transfer. This method ensures that your contribution goes directly towards our programs and services.',
    date: 'Ongoing',
    bankDetails: {
      bankName: 'Niger Delta Development Bank',
      accountNumber: '1234567890',
      sortCode: '00-00-00',
      swiftCode: 'NDDGBNLA',
      accountName: 'Betterment and Empowerment Foundation'
    }
  },
  {
    title: 'Partner',
    description: 'Collaborate with us to expand our reach and enhance our programs. We welcome partnerships with organizations and individuals who share our vision for a better Niger Delta.',
    date: 'Ongoing'
  },
  {
    title: 'Advocate',
    description: 'Raise awareness about the challenges faced by the Niger Delta region. Use your voice to advocate for change and mobilize resources to support our cause.',
    date: 'Ongoing'
  },
  {
    title: 'Register',
    description: 'To register with the foundation is ten thousand naira, and three months monthly due ahead, ten thousand naira per month. However, choosing to pay one year monthly due ahead is also an option.',
    date: 'Ongoing',
    fees: { // Added fees object here
      registrationFee: '₦10,000',
      monthlyDue: '₦10,000',
      threeMonthsDue: '₦30,000',
      annualDue: '₦120,000'
    },
    bankDetails: {
      bankName: 'Niger Delta Development Bank',
      accountNumber: '1234567890',
      sortCode: '00-00-00',
      swiftCode: 'NDDGBNLA',
      accountName: 'Betterment and Empowerment Foundation'
    }
  },
];

const GetInvolvedSection = ({ title, description, date, bankDetails, fees }) => (
    <div className="max-w-md mx-auto bg-green-600 bg-opacity-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="tracking-wide text-white text-2xl lg:text-3xl font-bold">{title}</div>
          <p className="mt-2 text-white text-lg lg:text-xl">{description}</p>
          {fees && (
            <div className="mt-4">
              <p className="text-white text-lg lg:text-xl">Registration Fee: {fees.registrationFee}</p>
              <p className="text-white text-lg lg:text-xl">Monthly Due: {fees.monthlyDue}</p>
              <p className="text-white text-lg lg:text-xl">Three Months Due: {fees.threeMonthsDue}</p>
              <p className="text-white text-lg lg:text-xl">Annual Due: {fees.annualDue}</p>
            </div>
          )}
          {bankDetails && (
            <div className="mt-4">
              <p className="text-white text-lg lg:text-xl mb-5">Please include the intent of your payment (e.g., 'donation', 'registration') in the transfer description.</p>
              <p className="text-white text-lg lg:text-xl">Bank Name: {bankDetails.bankName}</p>
              <p className="text-white text-lg lg:text-xl">Account Number: {bankDetails.accountNumber}</p>
              <p className="text-white text-lg lg:text-xl">Sort Code: {bankDetails.sortCode}</p>
              <p className="text-white text-lg lg:text-xl">SWIFT Code: {bankDetails.swiftCode}</p>
              <p className="text-white text-lg lg:text-xl">Account Name: {bankDetails.accountName}</p>
              <p className="text-white text-lg lg:text-xl mt-5">After completing the payment, please reach out to us with your payment confirmation at contact@foundation.org.</p>
            </div>
          )}
          <span className="text-sky-600">{date}</span>
        </div>
      </div>
    </div>
  );
  
const GetInvolvedPage = () => {
  return (
    <div className="about h-full">
        <Navbar/>
        <div className="bg-[url('./images/bg6.jpg')] bg-no-repeat bg-cover bg-center min-h-screen p-5">
            <div className="text-center text-3xl lg:text-5xl font-bold my-5 text-sky-600">Get Involved</div>
                <div className="space-y-4">
                    {involvementOptions.map((option, index) => (
                        <GetInvolvedSection key={index} {...option} />
                    ))}
                </div>
            </div>
            <FootBar/>
    </div>
  );
};

export default GetInvolvedPage;
