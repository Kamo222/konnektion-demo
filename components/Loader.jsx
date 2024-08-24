"use client"
import { delay, easeOut, motion } from "framer-motion"
import logo from "@/public/logo.svg";
import Image from "next/image";

const loaderVariants = {
    animationOne: {
        rotate: [-360, 360],
        opacity: [1, 0],
        transition: {
            rotate: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
            },
            opacity: {
                delay: 1.5,
                duration: 1,
                ease: "easeOut"
            }
            
        }
    }
}

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
        <motion.div variants={loaderVariants} animate="animationOne" exit={{opacity: 0}} className="w-[50px] h-[50px] my-[40px] mx-auto " >
            
            <Image
            src={logo}
            width={395}
            height={395}
            alt="Konnektion logo icon"
          />
        </motion.div>
        <motion.p initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay: 1.5, duration: 1}} className="text-xl text-red font-semibold">Loading</motion.p>
    </div>
  )
}

export default Loader