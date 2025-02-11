import React from "react";
import Image from "next/image";

function ManageMentTeam() {
  const memberList = [
    {
      image: "/member/member-1.png",
      name: "John Smith",
      position: "Sales Manager",
      description:
        "“John has over 15 years of experience in the automotive industry. He ensures every customer finds the perfect vehicle and leaves with a smile. His expertise lies in luxury cars and customer satisfaction.”",
    },
    {
      image: "/member/member-2.png",
      name: "Jane Doe",
      position: "Senior Sales Executive",
      description:
        "“Jane specializes in family vehicles and SUVs. With 10+ years of experience, she’s committed to helping customers choose reliable and affordable cars for their needs.”",
    },
    {
      image: "/member/member-3.png",
      name: "Alex Johnson",
      position: "Finance Advisor",
      description:
        "“Alex helps customers navigate financing options with ease. From competitive rates to trade-ins, he ensures the best deals for every client.”",
    },
    {
      image: "/member/member-4.png",
      name: "Lisa Carter",
      position: "Customer Support Specialist",
      description:
        "“Lisa is the first point of contact for customers. She’s passionate about assisting with inquiries and ensuring a smooth car-buying experience.”",
    },
    {
      image: "/member/member-5.png",
      name: "Mark Davis",
      position: "Certified Mechanic",
      description:
        "“Mark handles pre-delivery inspections and ensures every car meets our high standards. His attention to detail guarantees top-quality vehicles.”",
    },
    {
      image: "/member/member-6.png",
      name: "Sarah Lee",
      position: "Digital Marketing Specialist",
      description:
        "“Sarah manages our online presence and ensures customers have all the information they need about our vehicles and promotions.”",
    },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Heading Section */}
        <div className="space-y-4 text-center">
          <h2 className="font-semibold text-red-500 text-lg sm:text-xl">
            CONNECT MANAGEMENT TEAM
          </h2>
          <h1 className="font-bold text-3xl sm:text-5xl text-white">Our Team</h1>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {memberList.map((teamMember, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6 space-y-4">
                {/* Image and Details */}
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 bg-black p-1 rounded-full">
                    <div className="bg-white p-1 rounded-full">
                      <Image
                        src={teamMember.image}
                        alt={teamMember.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {teamMember.name}
                    </h3>
                    <p className="text-sm text-red-500">{teamMember.position}</p>
                  </div>
                </div>
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {teamMember.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageMentTeam;
