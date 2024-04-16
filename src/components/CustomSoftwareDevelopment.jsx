// import React from "react";

const CustomSoftwareDevelopment = () => {
  // Sample data for benefits
  const benefits = [
    {
      description: (
        <>
          Functionality is <strong>fully tailored</strong> to your requirements.
        </>
      ),
      icon: "star.svg",
    },
    {
      description: (
        <>
          <strong>Flexibility</strong> to evolve the solution when needed.
        </>
      ),
      icon: "star.svg",
    },
    {
      description: (
        <>
          <strong>Short learning curve</strong> due to tailored UX and UI.
        </>
      ),
      icon: "star.svg",
    },
    {
      description: (
        <>
          Powerful <strong>security</strong> of data and digital assets.
        </>
      ),
      icon: "star.svg",
    },
    {
      description: (
        <>
          The ability to use <strong>advanced techs </strong> (AI/ML,
          blockchain, IoT, etc.).
        </>
      ),
      icon: "star.svg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl md:text-5xl lg:w-1/2 text-customBlue font-bold font-inter mx-auto lg:mx-0 mb-6">
          Major Benefits of Custom Software Development
        </h2>
        <p className="text-gray-700 font-inter text-sm lg:text-base lg:w-[50%] lg:pl-4 mx-auto  pt-4 lg:mx-0">
          Stay ahead of industry trends and compliance requirements with
          software that adapts to evolving standards.
        </p>
      </header>
      <div className="mx-auto grid w-[70%] gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
        {/* Individual benefits */}
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg"
          >
            <img
              alt="star"
              loading="lazy"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              src={`/public/${benefit.icon}`}
              style={{ color: "transparent" }}
            />
            <p className="font-inter text-sm text-neutral-700">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;
