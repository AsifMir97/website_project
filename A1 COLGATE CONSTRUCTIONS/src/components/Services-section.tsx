import React from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const services = [
  {
    title: "Roofing",
    description: "From minor repairs to full roof replacements...",
    images: ["/assets/hero.jpg", "/assets/bg.jpg"],
  },
  // ...more services
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-4 bg-white dark:bg-gray-950 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase mb-12">Our Services</h2>
        <div className="flex flex-col gap-16">
          {services.map(({ title, description, images }, idx) => {
            const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

            return (
              <div
                key={title}
                ref={ref}
                className={`relative bg-gray-100 dark:bg-gray-800 p-6 rounded shadow transition-all duration-700 transform overflow-hidden ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {description}
                  </p>

                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    loop
                    spaceBetween={10}
                    slidesPerView={1}
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${title} ${i}`}
                          className="w-full h-48 object-cover rounded"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
