"use client";

import { BiSolidDollarCircle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { TbSeo, TbWorldWww } from "react-icons/tb";
import { MdDataExploration } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

const Cards = () => {
  const cards = [
    {
      icon: <MdDataExploration className={`text-slate-700 text-[7rem] `} />,
      heading: "Generate Leads",
      text: "A strong website will benefit your company's promotion and lead generating.",
    },
    {
      icon: <FaUsers className={`text-slate-700 text-[7rem] `} />,
      heading: "Grow your audience",
      text: "Present your small business and its goods or services to the public by having a website.",
    },
    {
      icon: <TbSeo className={`text-slate-700 text-[7rem] `} />,
      heading: "Leverage on SEO",
      text: "Bring organic search traffic to your Website.",
    },
    {
      icon: <TbWorldWww className={`text-slate-700 text-[7rem] `} />,
      heading: "Online Presence",
      text: "enables clients to find your business quickly and simply",
    },
    {
      icon: <BiSolidDollarCircle className={`text-slate-700 text-[7rem] `} />,
      heading: "Drive Traffic",
      text: "publish material on your website that highlights your goods and services",
    },
  ];

  return (
    
      <div className="container flex gap-5 mt-[2vh]">
        {cards.map((item, index) => {
          return (
            <motion.div
              className="hidden bg-white md:h-[15rem] md:w-[15rem] rounded-md md:flex flex-col items-center shadow-lg justify-center gap-3 hover:bg-slate-50"
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <motion.div whileHover={{ scale: 0.9 }}>{item.icon}</motion.div>

              <p className={`text-white hidden text-left`}>{item.text}</p>

              <h3 className="text-black text-xl font-bold text-center ">
                {item.heading}
              </h3>
            </motion.div>
          );
        })}
      </div>
  
  );
};

export default Cards;
