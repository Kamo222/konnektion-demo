"use client"

import Loader from "@/components/Loader";
import Image from "next/image";
import Welcome from "@/components/Welcome";
import Associates from "@/components/Associates";
import Benefits from "@/components/Benefits";
import Promo from "@/components/Promo";
import Cards from "@/components/Cards";
import Catalogue from "@/components/Catalogue";
import MobileCards from "@/components/MobileCards";
import MobileCatalogue from "@/components/MobileCatalogue";
import PromoTwo from "@/components/PromoTwo";
import Heading from "@/components/Heading";

import { easeIn, motion } from "framer-motion";

import { useEffect, useState } from "react";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    setInterval(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <main className="overflow-hidden">
      {isLoading ? <Loader /> : (
        <div >
          
          <Welcome />
          <Cards />
          <MobileCards />
          <Promo />
          <Heading value="Our Catalogue"/>
          <MobileCatalogue />
          <PromoTwo />
          
          <Associates />
          
          
        </div> 
      )}
         
       
    
      
      
      
    </main>
  );
}

export default Home;
