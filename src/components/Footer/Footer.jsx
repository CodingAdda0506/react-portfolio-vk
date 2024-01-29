import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center gap-2 py-16 text-[#555363]">
      <h1 className="">@realvjy 2024</h1>
      <ul className="flex items-center justify-center gap-5">
        <li className="">
          <a href="#" className="">
            twitter
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            dribble
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            instagram
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            figma
          </a>
        </li>
      </ul>
      <BackgroundGrandientCircle />
    </div>
  );
};

function BackgroundGrandientCircle() {
  return (
    <>
      <div className="absolute -bottom-10 left-0 -z-20 h-[100px] w-[150px] rounded-full bg-green-500 bg-opacity-20 blur-3xl sm:h-[200px] sm:w-[250px] sm:bg-opacity-10" />
      <div className="absolute -bottom-10 -z-20 h-[100px] w-[150px] translate-x-1/2 rounded-full bg-blue-500 bg-opacity-20 blur-3xl sm:h-[200px] sm:w-[250px] sm:bg-opacity-10" />
      <div className="absolute -bottom-10 left-0 right-0 -z-20 mx-auto h-[100px] w-[150px] rounded-full bg-purple-500 bg-opacity-20 blur-3xl sm:h-[200px] sm:w-[250px] sm:bg-opacity-10" />
      <div className="sm:w-[250psm absolute -bottom-10 right-0 -z-20 h-[100px] w-[150px] -translate-x-1/2 rounded-full bg-red-500 bg-opacity-20 blur-3xl sm:h-[200px] lg:bg-opacity-10" />
      <div className="sm:w-[250psm absolute -bottom-10 right-0 -z-20 h-[100px] w-[150px] rounded-full bg-yellow-500 bg-opacity-20 blur-3xl sm:h-[200px] lg:bg-opacity-10" />
    </>
  );
}

export default Footer;
