import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-36">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Yahye Hassan</h2>
          <p className="mt-4 text-sm">
            We provide quality services to help your business grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <Link to="/">
              <li className="hover:text-white mt-2">Home</li>
            </Link>
            <Link to="/projects">
              <li className="hover:text-white mt-2">Projects</li>
            </Link>
            <Link to="/blog">
            <li className="hover:text-white mt-2">Blog</li>
            </Link>
            <Link to="/contact">
            <li className="hover:text-white mt-2">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.facebook.com/Eng.Yerman" target="_blank"
            ><i className="fa-brands fa-facebook hover:text-blue-500"></i></a>
            <a
              href="https://www.tiktok.com/@yahye.h0" target="_blank"
            ><i className="fa-brands fa-tiktok hover:text-blue-500"></i></a>
            <a
              href="https://www.instagram.com/yerman2081/" target="_blank"
            ><i className="fa-brands fa-instagram hover:text-pink-500"></i></a>
            <a
              href="https://www.linkedin.com/in/eng-yhassan/" target="_blank"
            ><i className="fa-brands fa-linkedin hover:text-blue-600"></i></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YahyeHassan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
