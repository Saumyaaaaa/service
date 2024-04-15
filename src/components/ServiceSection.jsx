// import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const ServicesSection = () => {
  const playHoverSound = () => {
    const hoverSound = new Audio("/click_002.ogg"); // Path to the sound file in the public folder
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play(); // Play sound
  };

  
  const services = [
    {
      icon: "/computer.svg",
      title: "Custom Software Development",
    },
    {
      icon: "/web.svg",
      title: "Web Development",
    },
    {
      icon: "/mobile.svg",
      title: "Mobile App Development",
    },
    {
      icon: "/cloud.svg",
      title: "Cloud Computing Services",
    },
    {
      icon: "/qa.svg",
      title: "Quality Assurance and Testing",
    },
    {
      icon: "/ui.svg",
      title: "UI/UX Designing",
    },
    {
      icon: "/support.svg",
      title: "Maintenance and Support",
    },
    {
      icon: "/devops-sm.svg",
      title: "Dev Ops",
    },
    {
      icon: "/blockchain-sm.svg",
      title: "Blockchain Solutions",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex items-center gap-8 rounded-xl border bg-white px-4 py-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 20px",
              fontFamily: "Inter",
              position: "relative",
            }}
            onMouseEnter={playHoverSound} // Call playHoverSound function on hover
          >
            <div className="rounded-2xl bg-blue-200 p-3">
              <img
                src={service.icon}
                alt={service.title}
                className="h-8 w-8 mr-2"
              />
            </div>
            <span>{service.title}</span>
            {/* Arrow */}
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mt-4 mr-4 ">
              <LuArrowUpRight className="w-6 h-6 text-gray-500   group-hover:text-blue-500  translate-y-1 group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
