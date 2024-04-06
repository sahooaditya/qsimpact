import React, { useState, useEffect } from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState<any>(1);
  const slideCount = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevActiveSlide: any) =>
        prevActiveSlide < slideCount ? prevActiveSlide + 1 : 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prevActiveSlide: any) =>
      prevActiveSlide > 1 ? prevActiveSlide - 1 : slideCount
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prevActiveSlide: any) =>
      prevActiveSlide < slideCount ? prevActiveSlide + 1 : 1
    );
  };

  const handleSlideButtonClick = (slideIndex: any) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className="bg-gray-100 w-full">
      <div className="mx-auto  ">
        <div className="overflow-hidden relative mt-3">
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(activeSlide - 1) * 100.5}%)`,
            }}
          >
            <div className="inline-block w-full max-h-[500px]">
              <img
                src="https://wallpapers.com/images/featured/tree-0wdwtdt9xzcm91b1.jpg"
                alt=""
              />
            </div>

            <div className="inline-block w-full max-h-[500px]">
              <img
                src="https://wallpapers.com/images/featured/tree-0wdwtdt9xzcm91b1.jpg"
                alt=""
              />
            </div>

            <div className="inline-block w-full max-h-[500px]">
              <img
                src="https://wallpapers.com/images/featured/tree-0wdwtdt9xzcm91b1.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              onClick={handlePrevSlide}
              className="w-[30px] h-[30px] flex items-center bg-black/30 text-white p-2 rounded-full"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextSlide}
              className="w-[30px] h-[30px] flex items-center bg-black/30 text-white p-2 rounded-full"
            >
              &#8594;
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
            {[...Array(slideCount)].map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => handleSlideButtonClick(slideIndex + 1)}
                className={`h-2 w-2 rounded-full ${
                  activeSlide === slideIndex + 1
                    ? "bg-orange-500"
                    : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
