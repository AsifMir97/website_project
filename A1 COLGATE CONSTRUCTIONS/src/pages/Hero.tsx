import React from "react";
import { useInView } from "react-intersection-observer";
import ThemeToggle from "../components/ThemeToggle"; // Optional if you're using dark mode toggle
import ServicesSection from "../components/Services-section"; // or wherever you saved it

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <div className="relative h-screen flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wide">
            A1 COLGATE RESTORATION
          </h1>
          <p className="text-lg md:text-2xl max-w-xl">
            Restoring New York’s architectural heritage with precision and care.
          </p>
        </div>
        {/* Optional theme toggle */}
        {/* <ThemeToggle /> */}
      </section>

      {/* Services Section */}
      
      <ServicesSection/>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 bg-white dark:bg-gray-950 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold uppercase mb-10">Testimonials</h2>
          <div className="space-y-8">
            {[
              {
                quote:
                  "A1 Colgate exceeded our expectations. Their craftsmanship is top-notch!",
                name: "John D.",
              },
              {
                quote:
                  "The team restored our brownstone façade beautifully and on time.",
                name: "Sandra L.",
              },
            ].map(({ quote, name }, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow"
              >
                <p className="text-lg italic text-gray-700 dark:text-gray-300">
                  “{quote}”
                </p>
                <p className="mt-2 font-semibold text-gray-800 dark:text-white">
                  — {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gray-100 dark:bg-gray-900 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold uppercase mb-6">Contact Us</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Reach out to us for your next restoration project.
          </p>
          <div className="space-y-2 text-gray-800 dark:text-white">
            <p>📞 (123) 456-7890</p>
            <p>✉️ info@a1colgaterestoration.com</p>
            <p>📍 New York, NY</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
