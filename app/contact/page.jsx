"use client";

import Contact from "@/components/Contact";
import { useState, useEffect } from "react";


const ContactPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
        
      <Contact />
    </>
  );
};

export default ContactPage;
