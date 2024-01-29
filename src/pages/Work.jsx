import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import { currentWorkData } from "../Data";
import { PiStarFourFill } from "react-icons/pi";

const Work = () => {
  return (
    <div className="flex h-auto justify-center overflow-hidden border border-red-500 p-5 sm:border-blue-500 md:border-green-500 lg:border-purple-500 xl:border-yellow-500">
      <BgFliterBlack />
      <Navbar />
      <div className="mt-28 w-[700px]">
        {/* work page ka hero section  */}
        <div className="flex flex-col items-center justify-center   ">
          <h1 className="w-fit bg-gradient-to-r from-[#942bdd] to-[#fa2499] bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Work
          </h1>
          <p className="mt-4 text-center text-sm text-[#ecedee]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ducimus saepe, praesentium sit magnam voluptatem tempore sequi autem
            amet, repellendus quisquam maiores dicta esse delectus deserunt
            fugiat nam dolorum ipsam?
          </p>
          <div className="mt-3 flex w-full items-center justify-center gap-5">
            <div className="h-[1px] w-[30%] bg-[#1d1e23]" />
            <div className="flex items-center justify-center">
              <PiStarFourFill className="text-[10px] text-[#ecedee]" />
              <PiStarFourFill className="text-[#ecedee]" />
              <PiStarFourFill className="text-[10px] text-[#ecedee]" />
            </div>
            <div className="h-[1px] w-[30%] bg-[#1d1e23]" />
          </div>
        </div>
        {/* cards  */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3">
          {currentWorkData.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

function BgFliterBlack() {
  return (
    <div className="absolute inset-0 -z-10 mx-auto h-[350px] w-full bg-[#0a0a0d] opacity-50" />
  );
}

export default Work;
