import React from "react";
import "../../index.css";
import AboutImage from "../../assets/yahya_right.png";
import GlowButton from "../ui/GlowButton";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";


const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Yahya Limouni Abilities"
      className="md:min-h-screen py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
    >
      {/* ------------------ Image ------------------ */}
      <motion.div
        className="relative hidden md:block"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={AboutImage}
          alt="Yahya Limouni Portrait"
          className="col-span-1 w-64 md:w-100 h-auto drop-shadow-2xl rounded-full brightness-70"
        />

        {/* Shadow */}
        <div className="absolute z-15 top-0 w-1/2 h-full bg-gradient-to-br from-pr/75 via-transparent rounded-full blur-3xl"></div>

        {/* Square */}
        <motion.div
          className="absolute -z-5 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2
                     w-1/2 aspect-square border-pr/50 border-solid border-10 blur-xs"
          animate={{rotateZ:45}}
          initial={{ opacity: 0, scale: 0.8, rotateZ:70 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.div
          className="absolute -z-5 top-1/2 left-0 -translate-y-1/2
                     w-80 aspect-square border-an-blue/50 border-solid border-10 blur-xs"
          initial={{ opacity: 0, scale: 0.8, rotateZ:0 }}
          animate={{rotateZ: 45}}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </motion.div>

      {/* ------------------ Content ------------------ */}
      <motion.div
        className="col-span-2 flex flex-col gap-4 justify-center relative"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Section Title */}
        <h1 className="text-2xl font-bold text-gray-300">About Me</h1>

        {/* Name */}
        <h2 className="text-4xl font-extrabold text-gray-400 tracking-widest leading-snug">
          Yahya{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pr to-pr-spl">
            LIMOUNI
          </span>
        </h2>

        {/* About Text */}
        <p className="trucking-wide text-gray-400 text-xl">
          Hi, I’m Yahya — a dedicated web developer passionate about building secure, scalable, and user-friendly applications.
          I work with React, Laravel, TypeScript, and TailwindCSS, always prioritizing clean, efficient, and maintainable code. Security is at the core of my development process, following best practices such as the OWASP Top 10.
          I approach coding as solving complex puzzles: every challenge is an opportunity to design elegant and effective solutions.

          <br /> <br />

          Fluent in Arabic, Spanish, and English, with a strong level of French, I bring not only technical expertise but also cross-cultural communication skills to every project.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center w-full mt-8 gap-7 
                        md:justify-start md:flex-row md:gap-10">
          <GlowButton
            children="Get In Touch"
            href="/#contact"
            className="px-10 py-3 rounded-md w-full !tracking-widest"
          />

          <a
            href="/#skills"
            className="text-pr/75 flex gap-2 hover:text-an-purple duration-300 ease-out !tracking-wide"
          >
            See My Skills <GoArrowRight className="text-2xl" />
          </a>
        </div>

        {/* Shadow */}
        <div className="absolute z-15 -top-1/8 -right-1/5 h-100 md:w-80 opacity-30 bg-gradient-to-bl from-pr/50 to-an-pink/40 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
};

export default About;
