"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import promo from "@/public/promo.svg";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Promo = () => {
  return (
    <div className="container sm:h-[100vh] md:h-[105vh] sm:flex sm:flex-col md:flex-row items-center gap-[5rem] mb-8 md:mb-0">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Image
          src={promo}
          width={395}
          height={395}
          alt="Website Promotional Picture"
        />
      </motion.span>
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-4xl font-bold text-slate-800">
          Build a custom website from as little as
        </h1>
        <span className="text-5xl font-extrabold">
          R1299.99<span className="text-lg font-normal p-3">once-off</span>
        </span>
        <div>
          <span className="flex items-center gap-3">
            <FaCheck className="text-red" />
            <p className="font-bold text-lg">Domain name</p>
          </span>
          <span className="flex items-center gap-3">
            <FaCheck className="text-red" />
            <p className="font-bold text-lg">Hosting</p>
          </span>
          <span className="flex items-center gap-3">
            <FaCheck className="text-red" />
            <p className="font-bold text-lg">Design</p>
          </span>
          <span className="flex items-center gap-3">
            <FaCheck className="text-red" />
            <p className="font-bold text-lg">Contact Form</p>
          </span>
        </div>
        <div className="flex gap-3">
          <Button className="bg-slate-900 hover:bg-slate-900 shadow-lg">
            Get Started
          </Button>
          <Button className="text-black bg-white border border-black hover:bg-black hover:text-white shadow-lg">
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Promo;
