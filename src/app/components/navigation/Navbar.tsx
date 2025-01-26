'use client';

import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "../layout/DropDownMenu";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#" },
    { label: "Inventory", href: "/#inventory" },
    { label: "Financing", dropdown: ["Loan Calculator", "Credit Application"] },
    { label: "Special Offers", href: "/#Special-Offers" },
    { label: "Services", dropdown: ["Car Maintenance", "Repair Services"] },
    { label: "News", href: "/#News" },
    { label: "Careers", href: "/#Careers" },
    { label: "Contact", href: "/#Contact" },
  ];

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-6">
          {/* Logo */}
          <div className="">
            <Image
              src="/logo/logo.jpg"
              alt="Car Sales Logo"
              width={160}
              height={80}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation */}
          <nav
            className={`${isMobileMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
          >
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="font-semibold text-gray-700 py-3 px-6 md:py-0 md:px-0"
              >
                {link.dropdown ? (
                  <DropdownMenu label={link.label} menuItems={link.dropdown} />
                ) : (
                  <a
                    href={link.href}
                    className="hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
