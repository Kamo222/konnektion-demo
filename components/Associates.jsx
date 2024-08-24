"use client";

import { DiReact, DiNodejs, DiMongodb, DiJsBadge } from "react-icons/di";
import { BiLogoNetlify } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

import { motion } from "framer-motion";

const Associates = () => {
  const associates = [
    {
      name: "ReactJS",
      icon: <DiReact className="text-white text-[30px] md:text-[80px]" />,
    },
    {
      name: "NodeJS",
      icon: <DiNodejs className="text-white text-[30px] md:text-[80px]" />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className="text-white text-[30px] md:text-[80px]" />,
    },
    {
      name: "Javascript",
      icon: <DiJsBadge className="text-white text-[30px] md:text-[80px]" />,
    },
    {
      name: "Netlify",
      icon: <BiLogoNetlify className="text-white text-[30px] md:text-[80px]" />,
    },
    {
      name: "NextJS",
      icon: <RiNextjsFill className="text-white text-[30px] md:text-[80px]" />,
    },
  ];
  return (
    <div className=" bg-slate-900 h-auto flex items-center justify-evenly shadow-lg mb-[1px] py-3 md:py-0">
      {associates.map((item, index) => {
        return (
          <motion.div
            className="flex flex-col items-center sm:p-3 md:p-5"
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {item.icon}
            <p className="text-white text-[10px] md:text-[15px]">{item.name}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Associates;
