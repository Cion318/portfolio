"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ProjectData } from "@/constants";
import ProjectCard from "@/components/ProjectCard";

const cardVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 1, staggerChildren: 0.1 },
  },
};

const Projects = () => {
  return (
    <main className="block h-screen w-screen overflow-y-auto overflow-x-hidden bg-bg-dark-900 font-poppins text-white">
      <motion.div
        className="m-12 mb-20 mt-16 sm:mx-28 md:mx-40 2xl:mx-48 3xl:mx-96"
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        {/* Page Title */}
        <div className="page-title py-12">
          <h2 className="relative text-[2.5rem] font-bold text-white before:absolute before:left-0 before:top-full before:h-1 before:w-12 before:bg-skin-color before:content-[''] after:absolute after:left-0 after:top-full after:mt-2 after:h-1 after:w-6 after:bg-skin-color after:content-['']">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 place-items-center items-center xl:grid-cols-2">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
            />
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Projects;
