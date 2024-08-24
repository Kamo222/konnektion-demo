"use client";

import Image from "next/image";

import web1 from "@/public/catalogue/web1.jpg";
import web2 from "@/public/catalogue/web2.jpg";
import web3 from "@/public/catalogue/web3.jpg";
import web4 from "@/public/catalogue/web4.jpg";
import web5 from "@/public/catalogue/web5.jpg";
import web6 from "@/public/catalogue/web6.jpg";
import web7 from "@/public/catalogue/web7.jpg";
import web8 from "@/public/catalogue/web8.jpg";
import web9 from "@/public/catalogue/web9.jpg";
import web10 from "@/public/catalogue/web10.jpg";
import web11 from "@/public/catalogue/web11.jpg";
import web12 from "@/public/catalogue/web12.jpg";

import { motion } from "framer-motion";

const catalogue = [
  {
    name: "",
    designer: "",
    image: web1,
  },
  {
    name: "",
    designer: "",
    image: web2,
  },
  {
    name: "",
    designer: "",
    image: web3,
  },
  {
    name: "",
    designer: "",
    image: web4,
  },
  {
    name: "",
    designer: "",
    image: web5,
  },
  {
    name: "",
    designer: "",
    image: web6,
  },
  {
    name: "",
    designer: "",
    image: web7,
  },
  {
    name: "",
    designer: "",
    image: web8,
  },
  {
    name: "",
    designer: "",
    image: web9,
  },
  {
    name: "",
    designer: "",
    image: web10,
  },
  {
    name: "",
    designer: "",
    image: web11,
  },
  {
    name: "",
    designer: "",
    image: web12,
  },
];

const Catalogue = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-9 justify-center bg-black p-4 md:py-9  mt-5 md:mt-0">
        {catalogue.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0 }}
              key={index}
            >
              <Image
                src={item.image}
                width={550}
                height={450}
                alt="Konnektion logo icon"
                className="rounded-[15px]"
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Catalogue;
