"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {
  PersonalData,
  SkillData1,
  SkillData2,
  EducationData,
  ExperienceData,
} from "@/constants";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 1, staggerChildren: 0.1 },
  },
};

const About = () => {
  return (
    <main className="block h-screen w-screen overflow-y-auto overflow-x-hidden bg-bg-dark-900 font-poppins text-white">
      <motion.div
        className="mx-12 mb-20 mt-16 sm:mx-28 md:mx-40 2xl:mx-48 3xl:mx-96"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {/* Page Title */}
        <div className="page-title py-12">
          <h2 className="relative text-[2.5rem] font-bold text-white before:absolute before:left-0 before:top-full before:h-1 before:w-12 before:bg-skin-color before:content-[''] after:absolute after:left-0 after:top-full after:mt-2 after:h-1 after:w-6 after:bg-skin-color after:content-['']">
            About Me
          </h2>
        </div>

        {/* About Text */}
        <div className="py-12">
          <h3 className="mb-4 text-2xl font-bold">
            Alexander <span className="text-skin-color">Avercenko</span>
          </h3>
          <p className="text-base">
            Dedicated master&apos;s student in Robotics and Mechatronics with a
            passionate interest in IT and Front-End development. Seeking an
            entry into the IT industry to conceptualize and implement innovative
            technologies and applications.
          </p>
        </div>

        {/* Skills */}
        <div className=" py-12">
          <h3 className="mb-8 text-2xl font-bold">Skills</h3>
          <div className="w-full">
            <Swiper
              className="my-16"
              slidesPerView={4}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={5000}
              modules={[Autoplay]}
            >
              {SkillData1.map((skill, index) => (
                <SwiperSlide key={index} className="p-6 md:p-8 lg:p-0">
                  <Image
                    src={skill.image}
                    width={skill.width}
                    height={skill.height}
                    alt={skill.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="my-16"
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={5000}
              modules={[Autoplay]}
            >
              {SkillData2.map((skill, index) => (
                <SwiperSlide key={index} className="p-6 md:p-8 lg:p-0">
                  <Image
                    src={skill.image}
                    width={skill.width}
                    height={skill.height}
                    alt={skill.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col py-12 lg:flex-row">
          {/* Education */}
          <div className="mb-16 w-full lg:me-8 lg:w-1/2 xl:me-12 2xl:me-20">
            <h3 className="mb-8 text-2xl font-bold">Education</h3>
            <div className="timeline relative w-full rounded-lg border border-bg-dark-50 bg-bg-dark-100 px-4 py-8 duration-300 hover:border-skin-color">
              {EducationData.map((educationData) => (
                <div
                  className="timeline-item relative px-8 pb-10 before:absolute before:left-2 before:top-1 before:h-full before:w-[1px] before:bg-skin-color before:content-[''] last:pb-0"
                  key={educationData.title}
                >
                  <div className="circle-dot absolute left-0 top-0 mt-1 h-4 w-4 rounded-full bg-skin-color"></div>
                  <h4 className="timeline-date mb-3 flex items-center text-base text-text-dark-700">
                    <educationData.icon />
                    <p className="px-2">{educationData.date}</p>
                  </h4>
                  <h3 className="timeline-title mb-4 text-xl font-bold capitalize">
                    {educationData.title}
                  </h3>
                  <p className="timeline-description text-base text-text-dark-700">
                    {educationData.description.split("\n").map((item, key) => {
                      return (
                        <span key={key}>
                          {item}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div className="mb-16 w-full lg:ms-8 lg:w-1/2 xl:ms-12 2xl:ms-20">
            <h3 className="mb-8 text-2xl font-bold">Experience</h3>
            <div className="timeline relative w-full rounded-lg border border-bg-dark-50 bg-bg-dark-100 px-4 py-8 duration-300 hover:border-skin-color">
              {ExperienceData.map((experienceData) => (
                <div
                  className="timeline-item relative px-8 pb-10 before:absolute before:left-2 before:top-1 before:h-full before:w-[1px] before:bg-skin-color before:content-[''] last:pb-0"
                  key={experienceData.title}
                >
                  <div className="circle-dot absolute left-0 top-0 mt-1 h-4 w-4 rounded-full bg-skin-color"></div>
                  <h4 className="timeline-date mb-3 flex items-center text-base text-text-dark-700">
                    <experienceData.icon />
                    <p className="px-2">{experienceData.date}</p>
                  </h4>
                  <h3 className="timeline-title mb-4 text-xl font-bold capitalize">
                    {experienceData.title}
                  </h3>
                  <p className="timeline-description text-base text-text-dark-700">
                    {experienceData.description.split("\n").map((item, key) => {
                      return (
                        <span key={key}>
                          {item}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default About;
