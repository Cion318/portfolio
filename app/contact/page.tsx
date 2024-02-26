"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactData } from "@/constants";
import ContactForm from "@/components/ContactForm/ContactForm";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 1, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  return (
    <main className="block h-screen w-full overflow-y-auto overflow-x-hidden bg-bg-dark-900 font-poppins text-white">
      <motion.div
        className="mx-12 mb-20 mt-16 sm:mx-28 md:mx-40 2xl:mx-48 3xl:mx-96"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <div className="pb-4 pt-12">
          {/* Page Title */}
          <h2 className="relative mb-16 text-[2.5rem] font-bold text-white before:absolute before:left-0 before:top-full before:h-1 before:w-12 before:bg-skin-color before:content-[''] after:absolute after:left-0 after:top-full after:mt-2 after:h-1 after:w-6 after:bg-skin-color after:content-['']">
            Contact
          </h2>

          {/* Contact Title */}
          <h3 className="mb-5 text-center text-2xl text-skin-color">
            Any Questions?
          </h3>
          <h4 className=" text-center text-base text-white">
            I&apos;m at Your Service!
          </h4>
        </div>

        {/* Contact Information */}
        <div className="relative flex flex-col flex-wrap items-center justify-between pb-16 pt-12 lg:flex-row">
          {ContactData.map((contactData) => (
            <div
              className="mb-16 flex w-1/4 flex-col items-center"
              key={contactData.name}
            >
              <contactData.icon className="text-2xl text-skin-color" />

              <h4 className="mb-1 mt-4 text-base font-bold text-white">
                {contactData.name}
              </h4>
              <p className="text-base font-normal text-text-dark-700">
                {contactData.value.split("\n").map((item, key) => {
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

        {/* Contact Form */}
        <div className="">
          <h3 className="mb-5 text-center text-2xl text-skin-color">
            Send me an E-Mail
          </h3>
          <ContactForm />
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
