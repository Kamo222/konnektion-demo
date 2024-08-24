"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

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

const MobileCatalogue = () => {
  return (
    <Carousel className="flex items-center justify-center bg-slate-900 z-[0] mb-[1px] ">
      <CarouselPrevious className="bg-white" />
      <CarouselContent className="flex  p-8 gap-5">
        {catalogue.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0 }}
              key={index}
            >
              <CarouselItem
                
                className="h-[15rem] w-[20rem] rounded-md flex items-center shadow-lg justify-center basis-1/1 pl-0"
              >
                <Image
                  src={item.image}
                  width={650}
                  height={550}
                  alt="Konnektion logo icon"
                  className="rounded-[10px]"
                />
              </CarouselItem>
            </motion.div>
          );
        })}
      </CarouselContent>

      <CarouselNext className="bg-white" />

      <CarouselPrevious className="bg-white" />
      <CarouselNext className="bg-white" />
    </Carousel>
  );
};

export default MobileCatalogue;
