import React from "react";

const TechStackSection = () => {
  return (
    <div className="flex flex-col gap-8 text-center font-inter">
      <div className="font-bold uppercase text-red-500 mt-4">Tech stack</div>
      <div className="md:text-5xl text-4xl font-bold text-blue-950">
        Technology we behold
      </div>
      <div className="text-md mx-auto text-ui-600 md:w-3/4">
        Discover how we personalize your experience with customized features and
        effortlessly scale your system to match your growing needs.
      </div>
    </div>
  );
};

export default TechStackSection;
