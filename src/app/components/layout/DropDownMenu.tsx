import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

// Define the props interface
interface DropdownMenuProps {
  label: string;
  menuItems: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, menuItems }) => {
  return (
    <nav className="relative group">
      <button
        className="flex items-center font-semibold text-gray-700 cursor-pointer focus:outline-none"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>{label}</span>
        <FiChevronDown className="ml-2" />
      </button>

      <div
        className="absolute hidden group-hover:block bg-white shadow-md  w-64 rounded-md border border-gray-200 z-10"
        role="menu"
      >
        <ul className="py-2">
          {menuItems.map((item, index) => (
            <li key={index} role="menuitem">
              <a href={'#' + item}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-black hover:text-red-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DropdownMenu;
