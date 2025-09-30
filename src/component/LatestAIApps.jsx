// src/components/LatestAIApps.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Heart } from "lucide-react";
import { apps } from "../utils/utilsArr";

export default function LatestAIApps() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? apps.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= apps.length ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#2d1bb3] py-10 px-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Trending AI Apps</h2>
          <p className="text-gray-200 text-sm">
            Save time and costs with optimized AI apps designed for impactful
            content generation.
          </p>
        </div>
        {/* <button className="text-sm flex items-center gap-1 hover:underline">
          View All →
        </button> */}
      </div>

      {/* Cards */}
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 z-10 bg-white text-black p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-6 overflow-hidden w-full">
          {apps.slice(startIndex, startIndex + visibleCards).map((app) => (
            <div
              key={app.id}
              className="bg-[#3423c0] rounded-lg p-4 shadow-lg w-1/3 min-h-[24rem] min-w-[280px]"
            >
              {/* Featured Badge */}
              {/* {app.featured && (
                <span className="bg-orange-500 text-xs font-bold px-2 py-1 rounded absolute">
                  FEATURED
                </span>
              )} */}

              {/* Image */}
              <img
                src={app.img}
                alt={app.title}
                className="w-full h-40 object-cover rounded-lg"
              />

              {/* Info */}
              <div className="mt-3">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <span className="bg-blue-600 px-2 py-0.5 rounded text-xs">
                    {app.tags[0]}
                  </span>
                  <span className="bg-purple-600 px-2 py-0.5 rounded text-xs">
                    {app.tags[1]}
                  </span>
                  <span className="flex items-center text-yellow-300">
                    {app.price}
                  </span>
                  <img
                    src="https://assets.rentprompts.com/coin-png.webp"
                    width={"20"}
                    alt=""
                  />
                </div>

                <h3 className="text-lg font-bold mt-2">{app.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{app.desc}</p>

                {/* Likes + Rating */}
                <div className="flex items-center justify-between mt-3 text-sm">
                  <span className="flex items-center gap-1">
                    <Heart size={16} /> {app.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400" /> {app.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-4 z-10 bg-white text-black p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
