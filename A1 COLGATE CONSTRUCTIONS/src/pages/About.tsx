import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-800 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About A1 Colgate Constructions
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/about-construction.jpg"
              alt="Construction in New York"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed mb-4">
              A1 Colgate Constructions has been proudly serving New York for over a decade.
              We specialize in commercial and residential construction, restoration, and remodeling projects across the city’s diverse boroughs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our mission is to build with integrity, innovate with purpose, and restore New York’s historic charm while pushing the limits of modern construction.
            </p>
            <p className="text-lg leading-relaxed">
              With a highly skilled team and an unwavering commitment to quality, we deliver projects on time and beyond expectations. Whether it's brownstone renovation or ground-up developments — trust us to build New York's future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
