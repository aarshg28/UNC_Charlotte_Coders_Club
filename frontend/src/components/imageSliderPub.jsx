import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { RxDotFilled } from "react-icons/rx";
import CoverpageTIM from "../assets/CoverpageTIM.jpeg";
import coverPhoto3 from "../assets/coverPhoto3.jpeg";
import cp from "../assets/cp.jpeg";

function ImageSliderPub() {
  const slides = [
    {
      url: CoverpageTIM,
    },
    {
      url: cp,
    },
    {
      url: coverPhoto3,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const jumpToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getCurrentDotStyle = (index) => {
    return "";
    // `{{ color: "red" }}`;

    // === index ? `{{ color: "red" }}` : "";
  };

  return (
    <div className="h-[240px] md:max-w-[480px] md:h-[550px] w-full m-auto py-10 px-2 relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover"
      >
        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
                      left-5 text-2xl rounded-full p-2
                    bg-black/20 text-white 
                      cursor-pointer"
        >
          <ChevronLeftIcon onClick={previousSlide} className="h-8 w-8" />
        </div>

        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
                  right-5 text-2xl rounded-full p-2 bg-black/20 text-white 
                  cursor-pointer"
        >
          <ChevronRightIcon onClick={nextSlide} className="h-8 w-8" />
        </div>
      </div>
      <div className="flex justify-center py-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={currentIndex === index ? { color: "red" } : {}}
            className="text-2xl cursor-pointer"
            onClick={() => jumpToSlide(index)}
          >
            <RxDotFilled className="hover:text-rose-600 duration-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSliderPub;
