// src / components / LatestProductsSlider.jsx;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Star, Heart } from "lucide-react";
import { products } from "../utils/utilsArr";

export default function LatestProductsSlider() {
  return (
    <section className="bg-gradient-to-b from-[#1b0d80] to-[#2d1bb3] py-12 px-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Trending Products</h2>
          <p className="text-gray-200 text-sm mt-1">
            Explore cutting-edge bundles of images, audio, video, and prompts
            with no copyright.
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="product">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="relative bg-gradient-to-br from-[#393390] to-[#6b4fcf] rounded-2xl shadow-lg hover:scale-105 transition p-4 flex flex-col max-h-[22rem] h-full">
                {/* Featured Badge */}
                {p.featured && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-orange-500 text-xs font-bold px-2 py-1 rounded">
                    FEATURED
                  </span>
                )}

                {/* Image */}
                <div className="overflow-hidden rounded-xl ">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-44 object-cover rounded-xl hover:scale-110 transition"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col mt-3">
                  {/* Likes + Rating */}
                  <div className="flex justify-between text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <Heart size={14} /> {p.likes}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star size={14} /> {p.rating}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mt-2 overflow-hidden">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 line-clamp-2 overflow-hidden">
                    {p.desc}
                  </p>

                  {/* Tags + Price */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs bg-blue-600 px-2 py-0.5 rounded">
                      {p.type}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-300 text-sm">
                      {p.price}{" "}
                      <img
                        src="https://assets.rentprompts.com/coin-png.webp"
                        width={"20"}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
