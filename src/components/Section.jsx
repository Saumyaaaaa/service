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
        <div className="mx-auto md:hidden mt-4">
          <img
            alt="Mobile"
            src="services.svg"
            height="500"
            width="500"
            loading="lazy"
          />
        </div>
        <div className="hidden md:flex items-center justify-center mt-4">
          <img
            alt="Mobile"
            src="services.svg"
            height="500"
            width="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
