"use client";
import Image from "next/image";
import Link from "next/link";
import Typing from "@/components/Typing";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const imageVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

export default function Home() {
  return (
    <main className="block h-screen w-screen overflow-y-auto overflow-x-hidden bg-bg-dark-900 font-poppins text-white">
      <div className="mx-12 flex  h-full items-center justify-center sm:mx-28 md:mx-40 2xl:mx-48 3xl:mx-96">
        {/* Text Div */}
        <motion.div
          className="flex w-full flex-col xl:me-12 xl:w-2/3"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3
            className="font-poppins text-4xl font-medium text-white"
            variants={textVariants}
          >
            Hi, I&apos;m{" "}
            <span className="font-clicker text-5xl font-bold text-skin-color">
              Alex
            </span>
          </motion.h3>
          <motion.h3
            className="my-4 font-poppins text-3xl font-medium text-white"
            variants={textVariants}
          >
            I&apos;m a <Typing />
          </motion.h3>
          <motion.p
            className="mb-20 font-poppins text-xl text-text-dark-700"
            variants={textVariants}
          >
            I&apos;m driven to fuse code with creativity, transforming your
            digital vision into reality. Together, let&apos;s embark on an
            extraordinary collaboration, crafting something truly remarkable.
          </motion.p>
          <motion.div variants={textVariants}>
            <Link
              className="max-w-[200px] rounded-[6px] border border-skin-color bg-skin-color px-5 py-3 text-center font-poppins text-lg text-white duration-300 hover:bg-bg-dark-100"
              href="/about"
            >
              More About Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Div */}
        <motion.div
          className="home-img relative ms-12 hidden items-center justify-center text-center xl:flex"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            className="m-auto max-w-[80%]"
            src="/LogoWhite.png"
            alt="Image of me"
            width={300}
            height={800}
          />
        </motion.div>
      </div>
    </main>
  );
}
