// import React from "react";
import {
  HeartPulse,
  PiggyBank,
  Umbrella,
  Factory,
  Store,
  UserCog,
} from "lucide-react";

const ProvenIndustryExperience = () => {
  return (
    <div
      className="grid py-16 md:grid-cols-3"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="flex flex-col gap-4 px-6 pb-10 md:mx-auto lg:pl-20">
        <h2 className="text-3xl font-bold text-blue-950 md:text-5xl">
          Proven Industry Experience
        </h2>
        <p className="text-ui-500">
          Experience the advantage of partnering with a team that has honed its
          skills through proven industry expertise, consistently delivering
          excellence in every sector we touch.
        </p>
      </div>
      <div className="col-span-2 ml-[12%] grid w-[80%] gap-8 px-2 text-left md:grid-cols-3 md:gap-y-6 md:px-4 lg:px-12 ">
        <div
          className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
          style={{ opacity: 1, transform: "none" }}
        >
          <HeartPulse size={40} color="red" />
          <h3 className="font-semibold text-blue-950">Health Industry</h3>
        </div>
        <div
          className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
          style={{ opacity: 1, transform: "none" }}
        >
          <PiggyBank size={40} color="green" />
          <h3 className="font-semibold text-blue-950">Investment</h3>
        </div>
        <div
          className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
          style={{ opacity: 1, transform: "none" }}
        >
          <Umbrella size={40} color="#00d5ff" />
          <h3 className="font-semibold text-blue-950">Insurance</h3>
        </div>
        <div
          className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
          style={{ opacity: 1, transform: "none" }}
        >
          <Factory size={40} color="brown" />
          <h3 className="font-semibold text-blue-950">Manufacturing</h3>
        </div>
        <div
          className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
          style={{ opacity: 1, transform: "none" }}
        >
          <Store size={40} color="orange" />
          <h3 className="font-semibold text-blue-950">Retails</h3>
        </div>
        <div
          className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md"
          style={{ opacity: 1, transform: "none" }}
        >
          <UserCog size={40} color="pink" />
          <h3 className="font-semibold text-blue-950">Professional Services</h3>
        </div>
      </div>
    </div>
  );
};

export default ProvenIndustryExperience;
