"use client";
import React, { useState } from "react";
import { Socials } from "@/constants";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

const variants = {
  open: {
    clipPath: "circle(150% at 100% 50%)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0% at 100% 50%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="3xl:px-96 fixed top-0 z-40 flex h-16 w-full items-center justify-between bg-bg-dark-100 px-12 sm:px-28 md:px-40 2xl:px-48">
      <Logo />
      <div className="flex items-center justify-center">
        <Navigation open={open} />
        <SocialLinks />
        <ToggleButton setOpen={setOpen} open={open} />
      </div>
    </div>
  );
};

export default Navbar;
