import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container/Container";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const Review = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
      name: "Michael Kaizer",
      position: "CEO of Basecamp Corp",
      avatar: "",
    },
    {
      id: 2,
      quote:
        "Second testimonial content goes here. This is another amazing review from our satisfied customer.",
      name: "Sarah Johnson",
      position: "Marketing Director at TechCorp",
      avatar: "",
    },
    {
      id: 3,
      quote:
        "Third testimonial content goes here. We've seen incredible results since working with this team.",
      name: "David Wilson",
      position: "Founder of Startup Inc",
      avatar: "",
    },
    {
      id: 4,
      quote:
        "Fourth testimonial content goes here. Their service exceeded all our expectations.",
      name: "Emily Chen",
      position: "Product Manager at DesignCo",
      avatar: "",
    },
    {
      id: 5,
      quote:
        "Fifth testimonial content goes here. We couldn't be happier with the results.",
      name: "Robert Taylor",
      position: "CTO of Innovate Ltd",
      avatar: "",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const sliderRef = React.useRef(null);

  return (
    <div className="pt-[115px] pb-[95px]">
      <Container>
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="text-black text-4xl font-semibold font-manrope leading-[57.60px]">
                  “{testimonial.quote}”
                </div>
              </div>
            ))}
          </Slider>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-black/20 rounded-full border-2 border-white/50 flex items-center justify-center overflow-hidden">
                {testimonials[currentSlide].avatar ? (
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-2xl font-bold">
                    {testimonials[currentSlide].name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-black text-xl font-bold font-manrope leading-9">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-neutral-400 text-base font-medium font-manrope leading-7">
                  {testimonials[currentSlide].position}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="p-4 rounded-full border border-blue-950 hover:bg-blue-50 transition-colors"
              >
                <FaArrowLeftLong className="font-bold text-bold text-blue-900 " />
                
              </button>

              <div className="text-center min-w-[80px]">
                <span className="text-blue-950 text-xl font-semibold font-manrope underline leading-9">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-black/40 text-xl font-semibold font-manrope leading-9">
                  /{String(testimonials.length).padStart(2, '0')}
                </span>
              </div>

              <button
                onClick={() => sliderRef.current.slickNext()}
                className="p-4 bg-blue-950 rounded-full hover:bg-blue-900 transition-colors"
              >
                <FaArrowRightLong className="font-bold text-bold text-white " />

              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;