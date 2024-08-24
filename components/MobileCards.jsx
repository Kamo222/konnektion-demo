"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

import { BiSolidDollarCircle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { TbSeo, TbWorldWww } from "react-icons/tb";
import { MdDataExploration } from "react-icons/md";

const cards = [
  {
    icon: <MdDataExploration className={`text-white text-[7rem] `} />,
    heading: "Generate Leads",
    text: "A strong website will benefit your company's promotion and lead generating.",
  },
  {
    icon: <FaUsers className={`text-white text-[7rem] `} />,
    heading: "Grow your audience",
    text: "Present your small business and its goods or services to the public by having a website.",
  },
  {
    icon: <TbSeo className={`text-white text-[7rem] `} />,
    heading: "Leverage on SEO",
    text: "Bring organic search traffic to your Website.",
  },
  {
    icon: <TbWorldWww className={`text-white text-[7rem] `} />,
    heading: "Online Presence",
    text: "enables clients to find your business quickly and simply",
  },
  {
    icon: <BiSolidDollarCircle className={`text-white text-[7rem] `} />,
    heading: "Drive Traffic",
    text: "publish material on your website that highlights your goods and services",
  },
];

const MobileCards = () => {
  return (
    <div className=" md:hidden  p-0">
      <Carousel className="flex items-center justify-center bg-transparent ">
        <CarouselContent className="p-8 gap-5">
        
            {cards.map((item, index) => {
              return (
                <CarouselItem key={index} className="bg-black h-[12rem] w-[12rem] rounded-md flex flex-col items-center shadow-lg justify-center basis-1/1">
                    <motion.div whileHover={{ scale: 0.9 }}>
                    {item.icon}
                  </motion.div>
                  <p className={`text-white hidden text-left`}>{item.text}</p>

                  <h3 className="text-white text-lg font-bold text-center ">
                    {item.heading}
                  </h3>
        </CarouselItem>
              );
            })}
          
        </CarouselContent>
        <CarouselPrevious className="bg-black"/>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MobileCards;
