"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid  grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span>Hello, I am</span>
            <br />
            <TypeAnimation
              sequence={[
                "Aman",
                1000,
                "Web Developer",
                1000,
                "Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Aspiring web developer with a passion for crafting engaging and
            user-centric digital experiences.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-lg bg-[#9b59b6] hover:bg-slate-800 text-white mt-6">
              Download CV
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0"></div>
      </div>
    </section>
  );
};

export default HeroSection;
