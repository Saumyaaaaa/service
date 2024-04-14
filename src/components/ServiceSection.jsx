import React from "react";

const ServicesSection = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-8 rounded-xl border bg-white px-4 py-6 transition-all duration-500 hover:-translate-y-2"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 20px",
            fontFamily: "Inter",
          }}
        >
          <div className="rounded-2xl bg-blue-200 p-3">
            <img
              src={service.icon}
              alt={service.title}
              className="h-8 w-8 mr-2"
            />
          </div>
          <span
            style={{
              fontFamily: "Inter",
            }}
          >
            {service.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
