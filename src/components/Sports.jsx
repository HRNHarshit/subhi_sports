import React from "react";
import { Ad, Player } from "./index";
import data from "../data";

const Sports = () => {
  return (
    <div className="mx-24 my-10">
      <div className="ml-5 w-fit">
        <h1 className="font-poppins text-2xl font-bold leading-9">Sports</h1>
        <div className="w-full h-1 border-b-2 border-blue-400"></div>
      </div>
      <div className="my-10 flex flex-wrap justify-center gap-6">
        {data.Players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
        {data.Ads.map((ad) => (
          <Ad key={ad.id} ad={ad} />
        ))}
      </div>

      <div className="flex items-center w-full justify-center pt-2">
        <button className="cursor-pointer bg-blue-500 text-white px-8 py-3 rounded-sm flex">See More</button>
      </div>
    </div>
  );
};

export default Sports;
