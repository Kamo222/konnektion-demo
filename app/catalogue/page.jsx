"use client";

import Catalogue from "@/components/Catalogue";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CataloguePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <motion.div
      className="mb-[1px]"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn", delay: 0.3 }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-5xl font-extrabold py-7">Our Catalogue</h1>
          <Catalogue />
        </>
      )}
    </motion.div>
  );
};

export default CataloguePage;
