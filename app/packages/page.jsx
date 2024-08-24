"use client"

import Loader from "@/components/Loader"
import Packages from "@/components/Packages"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"


const PackagesPage = () => {

    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    setInterval(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    <motion.div className="container" initial={{opacity: 0, y: -6}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeIn", delay: 0.3}}>
        {
            isLoading ? <Loader /> : (
                <>
                    <h1 className="text-5xl text-slate-600 font-extrabold py-7">Our Packages</h1>
                    <Packages />
                </>
            )
        }
    </motion.div>
    </>
  )
}

export default PackagesPage;
