import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import PicraftHome from '../../assets/picraft/picraft_home.jpeg'
import PicraftTools from '../../assets/picraft/picraft_tools.jpeg'
import PicraftExample from '../../assets/picraft/picraft_processed_img.jpeg'
import BlogapiRouter from '../../assets/blogapi/router.png'
import BlogapiCheckGuard from '../../assets/blogapi/checkguard.png'
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { Links } from '../data/Links'
import { containerVariants } from '../ui/AnimationVariants'
import { titleVariants } from '../ui/AnimationVariants'
import { cardVariants } from '../ui/AnimationVariants'


const Projects: React.FC = () => {
    const imagesPicraft = [PicraftHome, PicraftTools, PicraftExample];
    const imagesBlogAPI = [BlogapiCheckGuard, BlogapiRouter]; 

    const picraftTechs = [
        { icon: IoLogoFigma, label: "Figma" },
        { icon: IoLogoJavascript, label: "JavaScript" },
        { icon: RiTailwindCssFill, label: "TailwindCSS" },
        { icon: FaLaravel, label: "Laravel" },
        { icon: FaFlask, label: "Flask" },
        { icon: FaPython, label: "Python" },
        { icon: FaDigitalOcean, label: "DigitalOcean" },
        { icon: SiGithubactions, label: "GitHub Actions" },
    ];

    const blogAPITechs = [
        { icon: FaLaravel, label: "Laravel" },
        { icon: FaDatabase, label: "SQL" }
    ]

    const lightVariants = {
        hidden: { opacity: 0, scale: 0},
        visible: { opacity: 0.2, scale: 1, transition: { duration: 0.8 } },
    };

    return(
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}

            id="projects" 
            aria-label="Personal Projects of Yahya Limouni"
            className="relative
                        min-h-screen md:px-16 px-4 py-10
                        flex flex-col gap-12 items-center justify-center"
        >
            {/* Glow effect */}
            <motion.div 
                variants={lightVariants}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           w-1/2 h-1/2 rounded-full 
                           bg-gradient-to-bl from-pr-l via-purple-800/25 to-purple-600/25 blur-3xl'
            ></motion.div>

            <motion.h1 
                className="md:text-4xl text-2xl font-bold text-gray-300"
                variants={titleVariants}
            >
                My Projects
            </motion.h1>

            <motion.div 
                className="w-full flex md:flex-row flex-col justify-center gap-6"
                variants={containerVariants}
            >
                <motion.div 
                    variants={cardVariants}
                    className='w-full md:w-1/3'
                >
                    <ProjectCard 
                        title="Image Manager"
                        description="An easy-to-use image processor for compressing, resizing, and converting different image file types."
                        images={imagesPicraft}
                        techs={picraftTechs}
                        githubLink={Links['github']['profile']}
                        liveLink={Links['picraft']}
                    />
                </motion.div>

                <motion.div 
                    variants={cardVariants}
                    className='w-full md:w-1/3'
                >
                    <ProjectCard 
                        title="Blog API - Laravel"
                        description="A blog API, that manages authentications for admin and user roles, likes, comments, posts, shares. Respects all security standars."
                        images={imagesBlogAPI}
                        techs={blogAPITechs}
                        githubLink={Links['github']['blogapi']}
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Projects;
