"use client"

import { Container } from "postcss"
import { Button } from "./ui/button"
import Image from "next/image"
import welcomeImage from "@/public/welcome.svg"
import { motion } from "framer-motion"

const Welcome = () => {
  return (
    <motion.div className="container sm:h-[90vh] sm:flex sm:flex-col-reverse md:flex-row items-center" initial={{opacity: 0, y: -6}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeIn", delay: 0.3}}>
        <div className="flex flex-col gap-3">
            <h1 className="text-slate-800 text-5xl font-extrabold">Give your business the digital advantage</h1>
            <p>Discover how our innovative products can transform your marketing efforts.</p>
            <div className="flex gap-3">
                <Button className="hover:bg-slate-800">Learn More</Button>
                <Button className="text-white bg-slate-800 border border-black hover:bg-black hover:text-white">Get Started</Button>
            </div>
        </div>
        <Image
            src={welcomeImage}
            width={395}
            height={395}
            alt="Konnektion logo icon"
            priority
          />
    </motion.div>
  )
}

export default Welcome