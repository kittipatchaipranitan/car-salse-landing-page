import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";

function Footer() {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-white" aria-label="Phone" />,
      text: "+66(0)-123-4567",
    },
    {
      icon: <FaEnvelope className="text-white" aria-label="Email" />,
      text: "info@carsales.com",
    },
  ];

  return (
    <footer className="bg-black text-white">
      <hr className="border-gray-500" />
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
          {/* Address Section */}
          <section>
            <header className="text-xl font-semibold mb-2">
              CONNECT COMPANY LIMITED
            </header>
            <address className="not-italic text-gray-400 leading-relaxed">
              123 Innovation Drive, <br />
              Tech Park District, <br />
              Springfield, IL 62701, <br />
              United States
            </address>
            <div className="mt-4">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-white hover:text-red-500 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </section>

          {/* Quick Links Section */}
          <section>
            <header className="font-semibold text-lg mb-2">Quick Links</header>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-red-500 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-red-500 transition duration-300">
                  Inventory
                </a>
              </li>
              <li>
                <a href="#financing" className="hover:text-red-500 transition duration-300">
                  Financing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-red-500 transition duration-300">
                  News
                </a>
              </li>
            </ul>
          </section>

          {/* Contact Info Section */}
          <section>
            <header className="font-semibold text-lg mb-2">Contact Info</header>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {item.icon}
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Privacy Policy Section */}
          <section>
            <header className="font-semibold text-lg mb-2">Privacy Policy</header>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#personal-policy"
                  className="hover:text-red-500 transition duration-300"
                >
                  Personal Protection Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookie-policy"
                  className="hover:text-red-500 transition duration-300"
                >
                  Cookie Usage Policy
                </a>
              </li>
              <li>
                <a
                  href="#privacy-policy"
                  className="hover:text-red-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
