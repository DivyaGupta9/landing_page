import React from "react";
import myVideo from "../assets/Rentprompts.mp4";
const HeroSection = () => {
  return (
    <>
      <div className="text-white relative lg:h-[100vh] sm:h-[100vh] pb-5">
        {/* Background grid effect */}
        <div className="absolute inset-0 opacity-70 bg-transparent bg-[linear-gradient(to_right,#808BF7_1px,transparent_1px),linear-gradient(to_bottom,#808BF7_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* 2 Column Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:h-full items-center">
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start px-6 space-y-6">
            <p className="text-center lg:text-left border-3 rounded-3xl border-[#e9e9ee]">
              <span className="inline-flex w-full justify-center lg:justify-start rounded-full bg-[#070e41] px-4 py-2 text-lg font-medium text-gray-50 backdrop-blur-3xl">
                Build, Sell, and Monetize AI Apps in One Place
              </span>
            </p>

            <p className="border-3 rounded-3xl border-[#ededf4]">
              <span className="inline-flex w-full justify-center lg:justify-start rounded-full bg-[#070e41] px-4 py-2 text-lg font-medium text-gray-50 backdrop-blur-3xl">
                Rentprompts is the all-in-one GenAI marketplace for creators,
                entrepreneurs, and businesses to generate, launch, and sell AI
                apps effortlessly
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                className="text-white cursor-pointer bg-gradient-to-br from-[#3730A3] to-[#9b4bc3] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Create Your AI App
              </button>
              <button
                type="button"
                className="text-white cursor-pointer bg-gradient-to-br from-[#3730A3] to-[#9b4bc3] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Explore Marketplace
              </button>
            </div>
          </div>

          {/* Right Side: Video */}
          <div className="flex justify-center items-center lg:mt-0">
            <video
              loop
              autoPlay
              muted
              className="rounded-2xl shadow-lg w-[90%] lg:w-[100%]"
            >
              <source src={myVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
