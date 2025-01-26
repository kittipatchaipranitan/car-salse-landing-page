import React from "react";
import {
  MdArrowForward,
  MdCarRepair,
  MdElectricCar,
  MdLocalCarWash,
  MdOutlineSpeed,
  MdDirectionsCar,
  MdSettings,
} from "react-icons/md";

function OurProduct() {
  const ourProductList = [
    {
      title: "SUVs for Every Journey",
      description: "Explore our wide range of SUVs designed for comfort and adventure.",
      icon: <MdDirectionsCar size={40} />,
    },
    {
      title: "Electric Vehicles",
      description: "Experience the future of driving with our eco-friendly electric cars.",
      icon: <MdElectricCar size={40} />,
    },
    {
      title: "Car Repairs & Maintenance",
      description: "Keep your vehicle in top shape with our expert repair services.",
      icon: <MdCarRepair size={40} />,
    },
    {
      title: "High-Performance Cars",
      description: "Unleash the thrill with our range of high-performance sports cars.",
      icon: <MdOutlineSpeed size={40} />,
    },
    {
      title: "Car Wash Services",
      description: "Get your car sparkling clean with our professional car wash services.",
      icon: <MdLocalCarWash size={40} />,
    },
    {
      title: "Customizations & Upgrades",
      description: "Personalize your vehicle with our custom upgrades and accessories.",
      icon: <MdSettings size={40} />,
    },
  ];

  return (
    <div className="bg-[url('/logo/3.png')] bg-cover bg-center bg-gray-800/50 min-h-full py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Heading Section */}
        <div className="text-center space-y-4">
          <h2 className="font-semibold text-white text-lg sm:text-xl">OUR PRODUCTS</h2>
          <h1 className="font-bold text-red-500 text-3xl sm:text-5xl">PRODUCT FEATURES</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourProductList.map((product, index) => (
            <div
              key={index}
              className="main-card bg-black rounded-lg relative overflow-hidden group shadow-lg"
            >
              <span className="absolute inset-0 bg-red-500 text-white translate-y-full transition-transform duration-500 group-hover:translate-y-0 group-hover:text-red-500"></span>
              <div className="relative text-white hover:text-black p-6 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-center">{product.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center">{product.title}</h3>
                  <p className="text-sm sm:text-base text-center">{product.description}</p>
                </div>
                <div className="text-center mt-auto mx-auto">
                  <a
                    href="#more-info"
                    className="flex items-center justify-center px-5 py-3 bg-red-500 text-black rounded-lg font-semibold space-x-2 hover:bg-black hover:text-red-500 transition duration-300"
                  >
                    <span>See more</span>
                    <MdArrowForward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
