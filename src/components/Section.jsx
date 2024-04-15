// import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid min-h-screen items-center md:grid-cols-2">
        <div className="md:pl-8 lg:pl-16 mt-4 md:mt-0">
          <div className="flex flex-col gap-9">
            {/* Heading for Our Services */}
            <h1 className="text-md font-bold uppercase text-red-500">
              Our Services
            </h1>
            {/* Subheading for Your Need Our Expertise */}
            <h2 className="text-4xl font-bold text-blue-950 md:text-6xl">
              Your Need Our Expertise
            </h2>
            {/* Description of services */}
            <p className="text-md">
              Elevate your business with our comprehensive suite of services.
              From cutting-edge mobile and web development to meticulous QA
              testing and proactive maintenance, we bring innovation, quality,
              and reliability to every project.
            </p>
          </div>
        </div>
        {/* Image representing services (hidden on small screens) */}
        <div className="hidden md:block mx-auto mt-4">
          <img
            alt="Mobile"
            src="services.svg"
            height="500"
            width="500"
            loading="lazy"
            className="hidden md:block mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
