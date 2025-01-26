import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white hidden md:flex">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Contact Info */}
        <div className="flex space-x-6">
          {[
            { icon: <FaPhoneAlt className="text-white" />, text: "+66(0)-123-4567" },
            { icon: <FaEnvelope className="text-white" />, text: "info@carsales.com" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {item.icon}
              <span className="text-gray-500" >{item.text}</span>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          {[
            { href: "#facebook", label: "Facebook", icon: <FaFacebook /> },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              // target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-red-500"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
