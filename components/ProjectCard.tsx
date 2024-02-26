"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div
      onClick={handleFlip}
      className="my-8 h-[187px] w-[300px] cursor-pointer rounded-md font-poppins sm:h-[250px] sm:w-[400px] md:h-[260px] md:w-[420px] 2xl:h-[325px] 2xl:w-[520px]"
    >
      <motion.div
        className="flip-card-inner h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front group relative h-full w-full rounded-xl bg-cover bg-center p-4 text-white"
        >
          <div className="absolute inset-0 h-full w-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 z-[20] hidden h-full w-full items-center justify-center pb-10 text-[20px] group-hover:flex">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-back group relative h-full w-full rounded-xl bg-cover bg-center p-4 text-white"
        >
          <div className="absolute inset-0 z-[-1] h-full w-full rounded-md bg-black opacity-80" />
          <div className="z-[30] flex flex-col p-3 sm:gap-8 md:gap-12 2xl:gap-28">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              <a
                className="z-40"
                href={link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt className="h-8 w-8" />
              </a>
            </div>

            <p className="hidden text-text-dark-700 sm:block sm:text-lg 2xl:text-xl">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
