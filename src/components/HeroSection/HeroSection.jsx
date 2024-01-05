import React from "react";

const HeroSection = () => {
  return (
    <div className="text-white">
      <div className="flex items-center gap-5">
        {/* image  */}
        <div className="w-[90px] overflow-hidden rounded-full">
          <img src="/image.jpg" alt="image" />
        </div>
        {/* text  */}
        <div className="">
          <h1 className="text-3xl font-bold">vijay verma</h1>
          <p className="text-sm text-[#727888]">Designer, Maker, Dreamer</p>
        </div>
      </div>
      <div className="mt-4">
        {/* Description  */}
        <div className="text-base font-normal sm:text-lg">
          A design wizard voyaging into the metaverse. I tell the story through
          my design and illustrations. I spent most of my time designing for
          brands and creating open-source design resources.
        </div>
        {/* oneliner text  */}
        <div className="mt-4 text-[#727888]">
          Building what I love{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text font-bold text-transparent">
            @overlayz
          </span>{" "}
          studio
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
