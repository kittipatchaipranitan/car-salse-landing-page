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
    <div
      className="bg-[url('/logo/2.png')] bg-cover bg-center min-h-full"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 space-y-16 py-16">
        {/* About Us Section */}
        <section className="space-y-8 text-center">
          <h2 className="font-semibold text-red-500 text-lg md:text-xl">
            ABOUT US
          </h2>
          <h1 className="font-bold text-3xl md:text-5xl text-black">
            CONNECT COMPANY LIMITED
          </h1>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro
            iusto modi a beatae blanditiis et quas laborum tempore asperiores
            esse maiores praesentium eum omnis, fugit exercitationem adipisci
            obcaecati aliquam ratione libero nihil sunt. Doloribus qui eius
            deleniti et enim. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident optio vero deserunt nisi ea recusandae molestias a,
            reprehenderit placeat inventore quaerat, repellat cumque unde
            debitis explicabo repudiandae suscipit commodi adipisci.
          </p>

          <a
            href="#read-more"
            className="mx-auto inline-flex items-center space-x-2 rounded-full bg-red-500 px-6 py-3 text-white font-semibold hover:bg-black hover:text-red-500 justify-center transition duration-300"
          >
            <span>Read more</span>
            <MdArrowForward />
          </a>
        </section>

        {/* Stats Section */}
        <section className="bg-black rounded-2xl p-8 text-red-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-base md:text-lg">{stat.label}</div>
                {stat.extra && (
                  <div className="text-sm md:text-lg text-gray-400">
                    {stat.extra}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
