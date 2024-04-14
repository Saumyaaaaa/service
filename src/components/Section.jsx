const Services = () => {
  return (
    <div className="container">
      <div className="grid min-h-screen items-center md:grid-cols-2">
        <div>
          <div className="flex flex-col gap-9 lg:pl-16">
            <div className="text-md font-bold uppercase text-red-500">
              Our Services
            </div>
            <div className="text-4xl font-bold text-blue-950 md:text-6xl">
              Your Need Our Expertise
            </div>
            <div className="text-md text-ui-600">
              Elevate your business with our comprehensive suite of services.
              From cutting-edge mobile and web development to meticulous QA
              testing and proactive maintenance, we bring innovation, quality,
              and reliability to every project.
            </div>
          </div>
        </div>
        <div className="mx-auto hidden w-[60%] items-center justify-center md:flex">
          <img
            alt="Mobile"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            src="services.svg"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
