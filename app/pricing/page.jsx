"use client";

import Pricing from "@/components/Pricing";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

const PricingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn", delay: 0.3 }}
      >
        {isLoading ? <Loader /> : <Pricing />}
      </motion.div>
    </>
  );
};

export default PricingPage;
