import React from "react";
import { MdArrowForward } from "react-icons/md";

function OurProduct() {
  const ourProductList = [
    {
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia.",
    },
  ];

  return (
    <div className="bg-[url('/logo/3.png')] bg-cover bg-center min-h-screen">

      <div className="container mx-auto space-y-16 py-16">
        {/* Heading Section */}
        <div className="text-center space-y-8">
          <h2 className="font-semibold text-white">OUR PRODUCTS</h2>
          <h1 className="font-bold text-red-500 text-5xl">PRODUCT FEATURES</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourProductList.map((product, index) => (
            <div
              key={index}
              className="main-card bg-black rounded-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-indigo-600 translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
              <div className="relative p-6 space-y-6">
                <h3 className="text-2xl text-white font-bold text-center">{product.title}</h3>
                <p className="text-center text-white">{product.description}</p>
                <div className="text-center">
                  <div className="flex items-center justify-center text-white px-5 py-3 rounded-lg space-x-2 ">
                    <span className="font-semibold">See more</span>
                    <MdArrowForward />
                  </div>
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