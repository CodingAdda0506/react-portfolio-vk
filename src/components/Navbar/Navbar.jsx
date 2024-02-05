import { motion } from "framer-motion";
import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeHam, setActiveHam] = useState(false);

  return (
    <motion.div
      className="absolute left-[20px] right-[20px] top-[20px] mx-auto flex h-[50px] max-w-[700px] items-start justify-between rounded-xl bg-[#161129] bg-opacity-90 p-2 px-4 font-bold text-white"
      animate={
        activeHam
          ? {
              height: 250,
            }
          : {
              height: 50,
            }
      }
      transition={{
        ease: [0.83, 0, 0.17, 1],
        duration: 1,
      }}
      exit={{}}
    >
      <div className="relative flex w-full items-center justify-between">
        {/* logo div  */}
        <div className="flex items-center justify-center">
          <p className="bg-gradient-to-r from-[#4f97f1] to-[#ee6779] bg-clip-text text-[20px] font-black uppercase text-transparent">
            hp
          </p>
          <div className="ml-5 hidden text-sm sm:block">
            <ul className="flex items-center justify-center gap-5 font-medium lowercase text-[#c7c7c7]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/story">Story</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/links">Links</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* ham div  */}
        <div className="flex items-center justify-center gap-2">
          <a href="" className="text-lg text-[#c7c7c7]">
            <CiTwitter />
          </a>
          <a href="" className="text-lg text-[#c7c7c7]">
            <FaInstagram />
          </a>
          <a href="" className="text-lg text-[#c7c7c7]">
            <FaYoutube />
          </a>
          <div
            className="sm:hidden"
            onClick={() => {
              setActiveHam(!activeHam);
            }}
          >
            <RxHamburgerMenu />
          </div>
        </div>
        {/* link div  */}
        <motion.ul
          className="absolute top-[55px] flex flex-col items-start justify-center gap-4 text-sm text-[#c7c7c7] opacity-0"
          animate={
            activeHam
              ? {
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                  },
                }
              : {
                  opacity: 0,
                  transition: {
                    delay: 0.15,
                  },
                }
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/story">Story</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </motion.ul>
        <BackgroundGrandientCircle />
      </div>
    </motion.div>
  );
};

function BackgroundGrandientCircle() {
  return (
    <>
      <div className="absolute -top-5 -z-20 h-[100px] w-[150px] rounded-full bg-green-500 blur-3xl sm:h-[200px] sm:w-[250px]" />
      <div className="absolute -top-5 -z-20 h-[100px] w-[150px] translate-x-1/2 rounded-full bg-blue-500 blur-3xl sm:h-[200px] sm:w-[250px]" />
      <div className="absolute -top-5 left-0 right-0 -z-20 mx-auto h-[100px] w-[150px] rounded-full bg-purple-500 blur-3xl sm:h-[200px] sm:w-[250px]" />
      <div className="absolute -top-5 right-0 -z-20 h-[100px] w-[150px] -translate-x-1/2 rounded-full bg-red-500 blur-3xl sm:h-[200px] sm:w-[250px]" />
      <div className="absolute -top-5 right-0 -z-20 h-[100px] w-[150px] rounded-full bg-yellow-500 blur-3xl sm:h-[200px] sm:w-[250px]" />
    </>
  );
}
export default Navbar;
