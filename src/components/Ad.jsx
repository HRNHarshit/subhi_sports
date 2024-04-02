import React from "react";

const Ad = ({ ad }) => {
  const { title, content, image } = ad;

  return (
    <div className="border-2 p-2 shadow-lg rounded-md w-[240px] flex flex-col gap-5">
      <div className="relative border-[0.5px] border-teal-300">
        <img src={image} alt={title} className="w-full" />
        {/* Ad sticker */}
        <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-tr-md">
          <span className="py-1 px-3 text-xs font-bold">Ad</span>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm font-normal text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Ad;
