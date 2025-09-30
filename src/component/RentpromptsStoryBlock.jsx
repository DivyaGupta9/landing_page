/* eslint-disable no-unused-vars */
import React from "react";
import { IconBase } from "react-icons";
import { IconLightning, IconSpark, IconWallet } from "../utils/utilsSvg";

function RentpromptsStoryBlock() {
  return (
    <section className="bg-[#3730A3] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text / Story */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Tired of Complex AI Tools and Platforms?
          </h2>

          <p className="text-lg text-white">
            With Rentprompts, anyone can create AI-powered apps, easily and
            without coding experience.
          </p>

          {/* Key points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <Feature
              title="AI for Everyone"
              desc="Whether you're a creator, entrepreneur, or AI enthusiast, Rentprompts makes AI accessible for all."
              icon={IconBase}
            />

            <Feature
              title="One-click App Creation"
              desc="Build and deploy your own AI app in a single click."
              icon={IconLightning}
            />

            <Feature
              title="Monetization"
              desc="Earn by selling your AI-generated apps on our marketplace."
              icon={IconWallet}
            />

            <Feature
              title="Generations on Demand"
              desc="Text, video, image, and audio generation powered by cutting-edge models."
              icon={IconSpark}
            />
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3">
            <button className="text-white bg-gradient-to-br from-[#5048c0] to-[#9b4bc3] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Get Started — Create an App
            </button>
            <button className="text-white  border border-gray-200 ounded-lg text-sm px-5 py-2.5 ">
              Explore Marketplace
            </button>
          </div>
        </div>

        {/* Right: Visual (idea → create → sell → earn) */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-lg">
            <StepsGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
export default RentpromptsStoryBlock;

/* ---------- Feature subcomponent ---------- */
function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="shrink-0">
        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
      </div>
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}

/* ---------- Steps graphic: idea -> create -> sell -> earn ---------- */
function StepsGraphic() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Badge label="Idea" />
        <Arrow />
        <Badge label="Create" primary />
      </div>

      <div className="flex items-center justify-center">
        <div className="h-0.5 w-2/3 bg-gray-200 rounded"></div>
      </div>

      <div className="flex items-center space-x-4">
        <Badge label="Sell" />
        <Arrow />
        <Badge label="Earn" />
      </div>

      <p className="text-sm text-gray-600">
        From idea to creation to marketplace — all in one place.
      </p>
    </div>
  );
}

function Badge({ label, primary }) {
  return (
    <div
      className={`px-4 py-2 rounded-xl font-semibold ${
        primary
          ? "bg-indigo-600 text-white"
          : "bg-white text-gray-800 shadow-sm"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M15 6l6 6-6 6"
        stroke="#9CA3AF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
