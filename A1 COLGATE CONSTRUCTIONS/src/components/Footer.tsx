import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">
            A1 Colgate Restoration
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Restoring New York’s architectural heritage with precision and care.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase">
            Contact
          </h4>
          <div className="mt-3 space-y-1 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Phone:</strong><br />
              <span className="ml-6 block">718-753-7796</span>
              <span className="ml-6 block">917-418-9938</span>
            </p>
            <p><strong>Email:</strong> a1colgaterestoration2@gmail.com</p>
            <p><strong>Address:</strong> 4225 Ave M, Brooklyn, NY 11234</p>
            <p><strong>Hours:</strong> Mon–Sat: 8AM–6PM</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase">
            Quick Links
          </h4>
          <ul className="mt- space-y-2 text-gray-700 dark:text-gray-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about_us" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/our_work" className="hover:underline">Our Work</Link></li>
            <li><Link to="/contact_us" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Map (small) */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase">
            Find Us
          </h4>
          <div className="mt-3 rounded overflow-hidden shadow">
            <iframe
              title="A1 Colgate Location"
              width="100%"
              height="150"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.940237422252!2d-73.93389668459093!3d40.62804167934009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2443dc2737c1b%3A0x4c4d17103a271e7a!2s4225%20Avenue%20M%2C%20Brooklyn%2C%20NY%2011234!5e0!3m2!1sen!2sus!4v1714660993536!5m2!1sen!2sus"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} A1 Colgate Restoration. All rights reserved.</p>
          <a href="#hero" className="hover:underline">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
