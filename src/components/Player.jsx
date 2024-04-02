import React from "react";

const Player = ({ player }) => {
  const { name, image, Events, sport } = player;

  return (
    <div className="flex items-center justify-center font-inter">
      <div className="border-2 p-2 shadow-lg rounded-md w-fit flex flex-col gap-3">
        <img src={image} alt={name} className="w-fit" />

        <h1 className="text-lg font-medium">{name}</h1>

        <div className="p-2 capitalize flex gap-12 bg-gray-100 rounded-2 text-xs">
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-600 text-xs font-normal">total events</h3>
            <p className="text-sm font-medium">{Events} events</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-600 text-xs font-normal">sport</h3>
            <p className="text-sm font-medium">{sport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
