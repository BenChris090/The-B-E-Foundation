import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import React, { useState } from 'react';

// Mock database of events
const eventSection = [
  {
    id: 1,
    title: 'Charity Movement',
    date: '2024-09-02',
    time: '10:00',
    location: 'Delta State',
    description: 'Join us for a charity movement event at Delta State.'
  },
  // Add more events as needed
];

const Events = () => {
  const [events, setEvents] = useState(eventSection);

  // Function to handle adding event to Google Calendar
  const addToCalendar = (event) => {
    
    const { title, description, location, date, time } = event;
    const startTime = new Date(`${date} ${time}`).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endTime = new Date(`${date} ${time}`).setHours(new Date(`${date} ${time}`).getHours() + 2); // Assuming 2 hour event
    const endTimeISO = new Date(endTime).toISOString().replace(/-|:|\.\d\d\d/g, '');

    const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime}/${endTimeISO}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

  // Log the event to the console
  console.log('Event added to calendar:', event);

  // Open the link in a new tab to allow the user to add the event to their Google Calendar
  window.open(calendarLink, '_blank');
  };

  return (
    <div className="about h-full">
        <Navbar/>
        <div className="bg-[url('./images/bg6.jpg')] bg-no-repeat bg-cover bg-center min-h-screen p-5">
            <div className="text-center text-3xl lg:text-5xl font-bold my-5 text-green-600">Upcoming Events</div>
            <div className="space-y-4">
                {events.map((event) => (
                <div key={event.id} className="max-w-md mx-auto bg-green-600 bg-opacity-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="tracking-wide text-2xl lg:text-3xl text-white font-semibold">{event.title}</div>
                            <p className="mt-2 text-white text-lg lg:text-xl">Date: {event.date}</p>
                            <p className="mt-2 text-white text-lg lg:text-xl">Time: {event.time}</p>
                            <p className="mt-2 text-white text-lg lg:text-xl">Location: {event.location}</p>
                            <p className="mt-2 text-white text-lg lg:text-xl">{event.description}</p>
                            <button onClick={() => addToCalendar(event)} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Add to Calendar
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <FootBar/>
    </div>
  );
};

export default Events;
