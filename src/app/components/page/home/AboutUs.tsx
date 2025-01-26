import React from "react";
import { MdArrowForward } from "react-icons/md";

function AboutUs() {
  const stats = [
    { value: "17+", label: "Years of Experience" },
    { value: "10MB", label: "AUTHORIZED CAPITAL" },
    { value: "70+", label: "STAFFS", extra: "(Connect Group)" },
    { value: "500+", label: "ANNUAL REVENUE", extra: "(Connect Group)" },
  ];

  return (
    <div className="bg-[url('/logo/2.png')] bg-cover bg-center min-h-screen" >
      <div className="container mx-auto  space-y-16 py-16">
        {/* About Us Section */}
        <section className="space-y-8 text-center">
          <h2 className="font-semibold text-red-500">ABOUT US</h2>
          <h1 className="font-bold text-5xl text-black">CONNECT COMPANY LIMITED</h1>
          <p className="text-lg text-grat-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro
            iusto modi a beatae blanditiis et quas laborum tempore asperiores
            esse maiores praesentium eum omnis, fugit exercitationem adipisci
            obcaecati aliquam ratione libero nihil sunt. Doloribus qui eius
            deleniti et enim.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio vero deserunt nisi ea recusandae molestias a, reprehenderit placeat inventore quaerat, repellat cumque unde debitis explicabo repudiandae suscipit commodi adipisci.
          </p>
          <button className="mx-auto flex items-center space-x-2 rounded-full bg-red-500 px-5 py-3 text-black font-semibold" >
            <span>Read more</span>
            <MdArrowForward />
          </button>
        </section>

        {/* Stats Section */}
        <section className="bg-black rounded-2xl p-8 text-red-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-bold">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
                {stat.extra && <div className="text-lg">{stat.extra}</div>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

  );
}

export default AboutUs;
