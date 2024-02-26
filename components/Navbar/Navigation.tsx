"use client";
import React, { useEffect, useState } from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Transition from "../Transition";

const navigationVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 20 },
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: { type: "spring", stiffness: 20 },
  },
};

type NavigationProps = {
  open: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ open }) => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [path, isRouting]);

  return (
    <div className="">
      <div className="hidden sm:flex">
        {isRouting && <Transition />}
        {NavLinks.map((nav) => (
          <Link
            className={`px-2 hover:text-skin-color ${path === nav.name ? "text-skin-color" : "text-text-dark-700"}`}
            key={nav.name}
            href={nav.link}
          >
            {nav.text}
          </Link>
        ))}
      </div>

      {open && (
        <motion.div
          initial="closed"
          animate="open"
          variants={navigationVariants}
          className="fixed left-0 top-12 flex w-screen flex-col justify-start bg-bg-dark-100 p-4"
        >
          {isRouting && <Transition />}
          {NavLinks.map((nav) => (
            <Link
              className={`px-2 py-2 hover:text-skin-color ${path === nav.name ? "text-skin-color" : "text-text-dark-700"}`}
              key={nav.name}
              href={nav.link}
            >
              {nav.text}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
