"use client";

import { FaCheck } from "react-icons/fa";

const pricing = [
  {
    name: "Basic",
    price: "R1299.99",
    features: [
      "Domain name",
      "Hosting (100GB Bandwidth)",
      "Design",
      "Contact form",
    ],
    for: "Ideal for Small Businesses and Profesionals",
  },
  {
    name: "Pro",
    price: "R4999.99",
    features: [
      "Domain name",
      "Hosting (1TB Bandwidth)",
      "Design",
      "Contact form",
      "Content Delivary Network",
      "Email List",
      "Google Analytics",
      "CRM system",
      "Dashboard",
    ],
  },
  {
    name: "Custom",
    price: "Custom",
    features: [
      "Domain name",
      "Hosting",
      "Design",
      "Contact form",
      "1TB Bandwidth",
      "Content Delivary Network",
      "Email List",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="pb-8">
    <h1 className="text-5xl font-extrabold py-7">Our Pricing</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9 justify-center">
      {pricing.map((item, index) => {
        return (
          <div key={index} className="bg-black h-auto rounded-md p-6">
            <div className="flex flex-col justify-between gap-4">
              
                <div className="flex items-center gap-5">
                  <div className="text-red bg-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h1 className="text-white text-2xl ">{item.name}</h1>
                </div>

                <div className="bg-black  rounded-md">
                  <h1 className="text-white text-4xl font-bold">{item.price}</h1>
                  <div className="h-[5px] rounded full bg-slate-600 mt-2"></div>
                </div>
                <div>
                  {item.features.map((item, index) => {
                    return (
                      <span className="flex items-center gap-3" key={index}>
                        <FaCheck className="text-red" />
                        <p className="font-bold text-lg text-white">{item}</p>
                      </span>
                    );
                  })}
                </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Pricing;
