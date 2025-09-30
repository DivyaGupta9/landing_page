import React, { useState } from "react";
import { testimonials } from "../utils/utilsArr";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Success Stories From Our Creators
        </h2>
        <p className="text-lg  mb-12">
          See how entrepreneurs, creators, and businesses are revolutionizing
          their work with Rentprompts.
        </p>

        <div className="relative max-w-xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === current
                  ? "opacity-100"
                  : "opacity-0 absolute top-0 left-0 w-full"
              }`}
            >
              <p className="text-xl italic text-gray-800 mb-4">
                "{testimonial.quote}"
              </p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-white">{testimonial.role}</p>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          >
            &#10094;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
