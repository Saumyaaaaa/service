import  { useState } from "react";

const Services = () => {
  const [showServices, setShowServices] = useState(false);

  const handleServicesClick = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer font-bold text-gray-800 font-inter"
        onClick={handleServicesClick}
      >
        Services
      </div>
      {showServices && (
        <div className="absolute top-8 right-0 bg-white shadow-md rounded-md p-4 w-[300px]">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <img
                src="computer.svg"
                alt="Custom Software Development"
                className="h-8 w-8 mr-2"
              />
              <span>Custom Software Development</span>
            </div>
            <div className="flex items-center">
              <img
                src="web.svg"
                alt="Web Development"
                className="h-8 w-8 mr-2"
              />
              <span>Web Development</span>
            </div>
            <div className="flex items-center">
              <img
                src="mobile.svg"
                alt="Mobile App Development"
                className="h-8 w-8 mr-2"
              />
              <span>Mobile App Development</span>
            </div>
            <div className="flex items-center">
              <img
                src="/cloud.svg"
                alt="Cloud Computing Services"
                className="h-8 w-8 mr-2"
              />
              <span>Cloud Computing Services</span>
            </div>
            <div className="flex items-center">
              <img
                src="qa.svg"
                alt="Quality Assurance and Testing"
                className="h-8 w-8 mr-2"
              />
              <span>Quality Assurance and Testing</span>
            </div>
            <div className="flex items-center">
              <img
                src="/ui.svg"
                alt="UI/UX Designing"
                className="h-8 w-8 mr-2"
              />
              <span>UI/UX Designing</span>
            </div>
            <div className="flex items-center">
              <img
                src="support.svg"
                alt="Maintenance and Support"
                className="h-8 w-8 mr-2"
              />
              <span>Maintenance and Support</span>
            </div>
            <div className="flex items-center">
              <img src="devops-sm.svg" alt="Dev Ops" className="h-8 w-8 mr-2" />
              <span>Dev Ops</span>
            </div>
            <div className="flex items-center">
              <img
                src="blockchain-sm.svg"
                alt="Blockchain Solutions"
                className="h-8 w-8 mr-2"
              />
              <span>Blockchain Solutions</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
