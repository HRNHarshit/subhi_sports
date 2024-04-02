import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Ticket from "./Ticket";
import data from "../data";

const Spotlight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const size = data.Tickets.length;

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? size - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === size - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mx-24 py-5 md:py-10 border-4">
      <div className="md:px-28 flex flex-col items-center justify-center gap-8">
        <h1 className="font-poppins font-bold text-5xl text-center">Collection Spotlight</h1>
        <p className="text-center text-sm font-normal">
          Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
        </p>

        <div className="relative w-full">
          <div className="w-full transition duration-500 ease-in-out transform flex overflow-hidden" style={{transform: `translateX(${-activeIndex * 16 * 3}rem)`}}>
            {data.Tickets.map((ticket, index) => (
              <div key={ticket.id} className="lg:w-1/3 md:w-1/2 flex-shrink-0 p-4">
                <Ticket key={ticket.id} ticket={ticket} />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 -translate-y-1/2 -ml-4 left-0 h-8 w-8 flex items-center justify-center bg-white rounded-full shadow text-gray-500 hover:bg-gray-100"
            onClick={handlePrev}>
            <IoIosArrowBack className="h-6 w-6" />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 -mr-4 right-0 h-8 w-8 flex items-center justify-center bg-white rounded-full shadow text-gray-500 hover:bg-gray-100"
            onClick={handleNext}>
            <IoIosArrowForward className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
