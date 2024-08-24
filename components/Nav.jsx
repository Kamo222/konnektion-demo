"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "packages",
      path: "/packages",
    },
    {
      name: "pricing",
      path: "/pricing",
    },
    {
      name: "catalogue",
      path: "/catalogue",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  const Nav = () => {
    const pathname = usePathname();
    return (
      <nav className="flex gap-8">
        {links.map((link, index) => {
          return (
            <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-gray-500 transition-all`}>
              {link.name}
            </Link>
          );
        })}
      </nav>
    );
  };

  export default Nav;