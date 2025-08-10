import React from "react";

const Contact_us = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-800 py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              A1 Colgate Restoration has proudly served NYC for decades. Whether
              you have a question, want to schedule a consultation, or need emergency
              service, feel free to contact us directly.
            </p>

            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p className="text-gray-800 dark:text-white">
                <strong>Phone:</strong> 718-753-7796
                <span className="ml-14 block">917-418-9938</span>
              </p>
              <p><strong>Email:</strong> a1colgaterestoration2@gmail.com</p>
              <p><strong>Address:</strong> 4225 AVE M - BROOKLYN, NY 11234</p>
              <p><strong>Working Hours:</strong> Mon–Sat: 8AM–6PM</p>
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="w-full h-80 lg:h-full rounded overflow-hidden shadow-lg">
            <iframe
              title="A1 Colgate Restoration Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.940237422252!2d-73.93389668459093!3d40.62804167934009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2443dc2737c1b%3A0x4c4d17103a271e7a!2s4225%20Avenue%20M%2C%20Brooklyn%2C%20NY%2011234!5e0!3m2!1sen!2sus!4v1714660993536!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_us;
