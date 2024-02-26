"use client";
import React from "react";
import { motion } from "framer-motion";

type ToggleButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<any>>;
  open: boolean;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ setOpen, open }) => {
  return (
    <div className="ps-4 sm:ps-0">
      {/* Hamburger Menu Button */}
      <button
        className={`nav-toggler relative flex h-10 w-10 cursor-pointer items-center justify-center border border-skin-color bg-transparent sm:hidden ${open ? "open" : ""}`}
        type="button"
        onClick={() => setOpen((prev: boolean) => !prev)}
      >
        <div className="nav-toggler flex h-10 w-10 cursor-pointer items-center justify-center bg-transparent">
          <span className="relative inline-block h-[2px] w-4 bg-white"></span>
        </div>
      </button>
    </div>
  );
};

export default ToggleButton;
