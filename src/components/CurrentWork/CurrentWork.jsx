import React from "react";
import { currentWorkData } from "../../Data";
import Card from "../Card/Card";
import { GoTriangleRight } from "react-icons/go";

const CurrentWork = () => {
  return (
    <div className="mt-6 text-white">
      {/* title and link  */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase text-[#727888]">
          Current Work
        </p>
        <a
          href="/"
          className="relative bg-gradient-to-r from-blue-400 to-purple-900 bg-clip-text text-sm font-bold text-[#727888] text-transparent"
        >
          All Works{" "}
          <span className="absolute -right-3 top-[5px]  text-purple-900 ">
            <GoTriangleRight />
          </span>
        </a>
      </div>
      {/* current work  */}
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-3">
        {currentWorkData.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CurrentWork;
