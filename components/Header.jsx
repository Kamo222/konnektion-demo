"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { motion } from "framer-motion";

import logo from "@/public/logo.svg";

const Header = () => {
  return (
    <motion.header initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeIn", delay: 0.5}} className="flex items-center py-6 text-black h-[10vh] sticky top-0 bg-white z-[1]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            width={35}
            height={35}
            alt="Konnektion logo icon"
          />
          <h1 className="text-4xl font-semibold">
            Konnektion
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button >Learn more</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
