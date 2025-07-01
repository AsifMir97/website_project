import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg.jpg')" }}></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-4 h-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wide">
          A1 COLGATE RESTORATION
        </h1>
        <p className="text-lg md:text-2xl max-w-xl">
          Restoring New York’s architectural heritage with precision and care.
        </p>
      </div>
    </section>
  );
};

export default Hero;
