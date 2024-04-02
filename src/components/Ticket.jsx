import React from "react";

const Ticket = ({ ticket }) => {
  const { image, title, data, day, time, location, collection } = ticket;

  return (
    <div className="border border-gray-300 rounded-md shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      <img src={image} alt={title} className="w-full mb-4" />
      <p className="text-sm mb-2">
        <span className="font-semibold">Date:</span> {data} ({day})
      </p>
      <p className="text-sm mb-2">
        <span className="font-semibold">Time:</span> {time}
      </p>
      <p className="text-sm mb-2">
        <span className="font-semibold">Location:</span> {location}
      </p>
      <button className="bg-blue-500 text-white px-2 py-1 rounded-md">{collection}</button>
    </div>
  );
};

export default Ticket;
