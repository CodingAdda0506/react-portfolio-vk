import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import { storyBlog } from "../Data";
import { PiStarFourFill } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Story = () => {
  return (
    <div className="flex h-auto justify-center overflow-hidden border border-red-500 p-5 sm:border-blue-500 md:border-green-500 lg:border-purple-500 xl:border-yellow-500">
      <BgFliterBlack />
      <Navbar />
      <div className="mt-28 w-[700px]">
        {/* work page ka hero section  */}
        <div className="flex flex-col items-center justify-center   ">
          <h1 className="w-fit bg-gradient-to-r from-[#942bdd] to-[#fa2499] bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Story
          </h1>
          <p className="mt-4 max-w-[470px] text-center text-sm text-[#ecedee] sm:text-lg">
            Occasionally, I share case study & my process. You can read it here.
            Most of my posts are published on Medium or as Twitter threads.
          </p>
          {/* divider */}
          <div className="mt-3 flex w-full items-center justify-center gap-5">
            <div className="h-[1px] w-[30%] bg-[#1d1e23]" />
            <div className="flex items-center justify-center">
              <PiStarFourFill className="text-[10px] text-[#ecedee]" />
              <PiStarFourFill className="text-[#ecedee]" />
              <PiStarFourFill className="text-[10px] text-[#ecedee]" />
            </div>
            <div className="h-[1px] w-[30%] bg-[#1d1e23]" />
          </div>
          {/* links section */}
          <div className="mt-4 flex w-full items-center justify-center gap-4 text-white">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-[#b6c0ff] px-3 py-2 font-bold text-[#475bba]"
            >
              <CiYoutube className="text-[20px]" />
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-[#fdcfea] px-3 py-2 font-bold  text-[#a32a93]"
            >
              <CiYoutube className="text-[20px]" />
              <span>Youtube</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-[#dbcfff] px-3 py-2 font-bold  text-[#7740be]"
            >
              <CiLinkedin className="text-[20px]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        {/* cards  */}
        <div className="mt-7 flex flex-col items-center justify-center gap-6">
          {storyBlog.map((item, i) => (
            <a href={item.path} className="max-w-[470px] text-white">
              <h1 className="font-bold">{item.header}</h1>
              <p className="text-gray-400">{item.desc}</p>
              <p className="text-gray-700">
                <span className="">{item.date}</span>
                {"  "} .{"  "}
                <span className="">{item.tag}</span>
              </p>
            </a>
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

export default Story;
