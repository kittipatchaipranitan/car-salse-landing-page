'use client';

import React from "react";
import Image from "next/image";
import DropdownMenu from "../layout/DropDownMenu";

const Sidebar = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Inventory", href: "/inventory" },
    { label: "Financing", dropdown: ["Loan Calculator", "Credit Application"] },
    { label: "Special Offers", href: "/#" },
    { label: "Services", dropdown: ["Car Maintenance", "Repair Services"] },
    { label: "News", href: "/#" },
    { label: "Careers", href: "/#" },
    { label: "Contact", href: "/#" },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-8">
        {/* Logo */}
        <div>
          <Image
            src="/logo/logo.jpg"
            alt="Car Sales Logo"
            width={160}
            height={80}
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="font-semibold text-gray-700">
              {link.dropdown ? (
                <DropdownMenu label={link.label} menuItems={link.dropdown} />
              ) : (
                <a href='#' className="hover:text-gray-900">
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
