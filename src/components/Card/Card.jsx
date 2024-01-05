import React from "react";

const Card = ({ item }) => {
  return (
    <div className="mb-2 flex items-center gap-2 p-2 sm:flex-col">
      <div className="w-[80px] overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-500 to-red-500 sm:w-[185px]">
        <img src="/image.jpg" alt="" />
      </div>
      <div className="text-sm">
        <p className="font-medium">{item.title}</p>
        <p className="w-[180px] text-[#727888]">{item.desc}</p>
      </div>
    </div>
  );
};

export default Card;
