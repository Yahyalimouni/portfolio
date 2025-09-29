import React from "react";
import { motion } from 'framer-motion';
import { cardVariants, containerVariants, titleVariants, stackVariants } from '../ui/AnimationVariants';
import SkillCard from "../ui/SkillCard";

// Icons
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase, FaLaravel, FaFlask, FaCss3Alt, FaHtml5, FaReact, FaPhp, FaPython, FaDigitalOcean } from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";
import { SiTypescript, SiSelenium, SiMysql, SiGithubactions } from "react-icons/si";
import { GrOracle } from "react-icons/gr";

const Skills: React.FC = () => {
  const stacks = {
    'Front-End': [
        { name: 'HTML', logo: FaHtml5 },
        { name: 'CSS', logo: FaCss3Alt },
        { name: 'TailwindCSS', logo: RiTailwindCssFill },
        { name: 'JavaScript', logo: IoLogoJavascript },
        { name: 'React JS', logo: FaReact },
        { name: 'TypeScript', logo: SiTypescript },
    ],
    'Back-End': [
        { name: 'PHP', logo: FaPhp },
        { name: 'Laravel', logo: FaLaravel },
        { name: 'Python', logo: FaPython },
        { name: 'Flask', logo: FaFlask },
    ],
    'Database': [
        { name: 'SQL', logo: FaDatabase },
        { name: 'MySQL', logo: SiMysql },
        { name: 'Oracle', logo: GrOracle },
    ],
    'DevOps': [
        { name: 'G. Actions', logo: SiGithubactions },
        { name: 'DigitalOcean', logo: FaDigitalOcean },
        { name: 'Git', logo: FaSquareGit },
    ],
    'Web Scraping': [
        { name: 'Selenium', logo: SiSelenium },
    ],
  };

  return (
    <motion.section
        id="skills"
        className="min-h-screen w-full px-4 md:px-16 py-15 flex flex-col gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        <motion.h1 className="md:text-4xl text-2xl font-bold text-gray-300" variants={titleVariants}>
                Weapons of Code
        </motion.h1>

        <div className="w-full flex flex-col gap-8">
            {Object.entries(stacks).map(([stackName, skills]) => (
                <motion.div key={stackName} variants={stackVariants} className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold
                                    w-fit
                                    text-gray-400
                                   ">{stackName}</h2>
                    <div className="flex flex-wrap gap-2 md:gap-5">
                    {skills.map(skill => (
                        <motion.div key={skill.name} variants={cardVariants} className="w-[calc(50%-10px)] md:w-fit">
                            <SkillCard name={skill.name} logo={skill.logo} className="text-pr" />
                        </motion.div>
                    ))}
                    </div>
                </motion.div>
            ))}
            </div>
        </motion.section>
  );
};

export default Skills;
