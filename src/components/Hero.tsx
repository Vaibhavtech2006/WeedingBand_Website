import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from "../pages/1.jpg";
import img2 from "../pages/2.jpg";
import img3 from "../pages/3.jpg";
import img4 from "../pages/4.jpg";

const slides = [
  {
    image: img,
    title: 'Traditional Wedding Band Services',
    description: 'Creating magical moments with timeless melodies',
  },
  {
    image: img2,
    title: 'Luxury Wedding Entertainment',
    description: 'Elevating your special day with grand celebrations',
  },
  {
    image: img3,
    title: 'Premium Music Services',
    description: 'Bringing harmony to your wedding festivities',
  },
  {
    image: img4,
    title: 'Exclusive Band Services',
    description: 'Delivering unforgettable wedding experiences',
  },
];


export default function Hero() {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full ">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                  <div className="space-x-4">
                    <a href="/book-now" className="btn-primary">Book Now</a>
                    <a href="/enquiry" className="btn-secondary">Make an Enquiry</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}