const Services = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid min-h-screen items-center md:grid-cols-2">
        <div className="md:pl-8 lg:pl-16 mt-4 md:mt-0">
          <div className="flex flex-col gap-9">
            <div className="text-md font-bold uppercase text-red-500">
              Our Services
            </div>
            <div className="text-4xl font-bold text-blue-950 md:text-6xl">
              Your Need Our Expertise
            </div>
            <div className="text-md ">
              Elevate your business with our comprehensive suite of services.
              From cutting-edge mobile and web development to meticulous QA
              testing and proactive maintenance, we bring innovation, quality,
              and reliability to every project.
            </div>
          </div>
        </div>
        {/* Hidden on small screens, shown on medium and large screens */}
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
        {/* Hidden on medium and large screens, shown on small screens */}
        <div className="md:hidden">
          <img
            alt="Mobile"
            src="services.svg"
            height="500"
            width="500"
            loading="lazy"
            className="md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
