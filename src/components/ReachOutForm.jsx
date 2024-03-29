import React from 'react';

function ReachOutForm() {
  return (
    <div className="max-w-md mx-auto">
      <form action="https://formspree.io/f/xwkgnjpr" method="POST" className="space-y-4">
        <input
          type="text"
          name="What Demographic was the reach out targeted to"
          placeholder="Demographic targeted"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
        <input
          type="text"
          name="What was the location of the reach out"
          placeholder="Location of reach out"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
        <input
          type="date"
          name="What was the date the reach out"
          placeholder="Date of reach out"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
        <input
          type="text"
          name="What was the intention of the reach out"
          placeholder="Intention of reach out"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
        <input
          type="file"
          name="Attach Pictures & Videos (if any)"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReachOutForm;
