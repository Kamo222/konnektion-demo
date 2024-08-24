"use client";

import { Container } from "postcss";
import { Button } from "./ui/button";
import Image from "next/image";
import promo2 from "@/public/promo2.svg";
import { motion } from "framer-motion";

const PromoTwo = () => {
  return (
    <div className="sm:h-[100vh] flex flex-col md:flex-row items-center justify-center bg-slate-900 p-[80px] mb-[1px]">
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Couple your website with a tried and tested digital strategy.
        </h1>
        <p className="text-slate-50">
          Use Google Analytics to evaluate your marketing efforts.
        </p>
        <div className="flex gap-3">
          <Button className="hover:bg-slate-600 bg-white text-slate-800">
            Get Started
          </Button>
          <Button className="text-slate-800 bg-white border border-black hover:bg-black hover:text-white">
            Learn More
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="p-0 m-0 h-auto w-auto"
      >
        <Image
          src={promo2}
          width={600}
          height={600}
          alt="Konnektion logo icon"
        />
      </motion.div>
    </div>
  );
};

export default PromoTwo;
