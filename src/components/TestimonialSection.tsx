import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/avatar1.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "/images/avatar2.jpg",
    content:
      "Sed consequat, erat eu fermentum mattis, elit dolor consequat elit.",
  },
  // Add more testimonials as needed
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Testimonials
        </h2>
        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 focus:outline-none"
            >
              {"<"}
            </button>
            <div className="relative w-full max-w-xl overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full left-full transition-transform duration-500 ${
                    index === activeIndex ? "left-0" : "-left-full"
                  }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={testimonial.image}
                        alt="Avatar"
                      />
                      <div>
                        <p className="text-lg font-medium">
                          {testimonial.content}
                        </p>
                        <p className="text-gray-500">- {testimonial.name}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 focus:outline-none"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
