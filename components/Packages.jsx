"use client";

import { PiStrategy } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Web Design and Hosting",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi, aut facilis id alias recusandae? Sunt, magni non voluptatum ipsa iusto praesentium deserunt similique facere deleniti, sit qui voluptas aperiam?",
    icon: <FaLaptopCode />,
  },
  {
    name: "Digital Marketing Strategy",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi, aut facilis id alias recusandae? Sunt, magni non voluptatum ipsa iusto praesentium deserunt similique facere deleniti, sit qui voluptas aperiam?",
    icon: <PiStrategy />,
  },
  {
    name: "Search Engine Optimization",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi, aut facilis id alias recusandae? Sunt, magni non voluptatum ipsa iusto praesentium deserunt similique facere deleniti, sit qui voluptas aperiam?",
    icon: <TbSeo />,
  },
  {
    name: "Paid Advertising",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi, aut facilis id alias recusandae? Sunt, magni non voluptatum ipsa iusto praesentium deserunt similique facere deleniti, sit qui voluptas aperiam?",
    icon: <RiAdvertisementLine />,
  },
  {
    name: "Email Marketing",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi, aut facilis id alias recusandae? Sunt, magni non voluptatum ipsa iusto praesentium deserunt similique facere deleniti, sit qui voluptas aperiam?",
    icon: <MdMarkEmailRead />,
  },
  {
    name: "Social Media Marketing",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi, aut facilis id alias recusandae? Sunt, magni non voluptatum ipsa iusto praesentium deserunt similique facere deleniti, sit qui voluptas aperiam?",
    icon: <IoShareSocial />,
  },
];

const Packages = () => {
  return (
    <div className="flex flex-col gap-3 pb-8">
      {packages.map((item, index) => {
        return (
          <motion.div
            className="bg-black flex flex-col md:flex-row items-start md:items-center p-7 rounded-md hover:bg-slate-700 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0 }}
            key={index}
          >
            <div className="pb-5 borbder-b pl-5 md:pl-0  md:pr-5 md:border-r">
              <span className="text-white text-[100px]">{item.icon}</span>
            </div>
            <div className="pl-5">
              <h1 className="text-red text-2xl text-bold pb-2">{item.name}</h1>
              <p className="text-white">{item.text}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Packages;
