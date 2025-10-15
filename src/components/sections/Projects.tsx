import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'

import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase, FaLaravel, FaFlask, FaDigitalOcean, FaReact, FaPython } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { Links } from '../data/Links'
import { containerVariants } from '../ui/AnimationVariants'
import { titleVariants } from '../ui/AnimationVariants'
import { cardVariants } from '../ui/AnimationVariants'

/* --------------- Assets --------------  */
// -Picraft
import PicraftHome from '../../assets/picraft/picraft_home.jpeg'
import PicraftTools from '../../assets/picraft/picraft_tools.jpeg'
import PicraftExample from '../../assets/picraft/picraft_processed_img.jpeg'

// -Blog API
import BlogapiRouter from '../../assets/blogapi/router.png'
import BlogapiCheckGuard from '../../assets/blogapi/checkguard.png'

// -TriLink
import TLHome from '../../assets/trilink/TriLinkHome.png'
import TLManager from '../../assets/trilink/TriLinkManagerDashboard.png'
import TLWaiter from '../../assets/trilink/TriLinkWaiterDashboard.png'

// -Cafeteria Sol
import CSHero from '../../assets/cafeteriasol/hero.png'
import CSFeatured from '../../assets/cafeteriasol/featured.png'
import CSReservations from '../../assets/cafeteriasol/reservation.png'
import CSMenu from '../../assets/cafeteriasol/menu.png'

const Projects: React.FC = () => {
    const imagesPicraft = [PicraftHome, PicraftTools, PicraftExample];
    const imagesBlogAPI = [BlogapiCheckGuard, BlogapiRouter]; 
    const imagesTriLink = [TLHome, TLManager, TLWaiter];
    const imagesCafeteriaSol = [CSHero, CSFeatured, CSMenu, CSReservations];

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

    const triLinkTechs = [
        { icon: FaLaravel, label: "Laravel" },
        { icon: FaReact, label: "React" },
        { icon: RiTailwindCssFill, label: "TailwindCSS" },
        { icon: FaDatabase, label: "SQL" },
    ]
    
    const cafeteriaSolTechs = [
        { icon: FaReact, label: "React" },
        { icon: RiTailwindCssFill, label: "TailwindCSS" },
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
                className="w-full grid md:grid-cols-3 grid-cols-1 gap-2"
                variants={containerVariants}
            >
                <motion.div 
                    variants={cardVariants}
                    className=''
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
                    className=''
                >
                    <ProjectCard 
                        title="Blog API - Laravel"
                        description="A blog API, that manages authentications for admin and user roles, likes, comments, posts, shares. Respects all security standars."
                        images={imagesBlogAPI}
                        techs={blogAPITechs}
                        githubLink={Links['github']['blogapi']}
                    />
                </motion.div>

                <motion.div 
                    variants={cardVariants}
                    className=''
                >
                    <ProjectCard 
                        title="Order Management System"
                        description="TriLink is a web application designed to streamline restaurant operations by connecting managers, waiters, and kitchen staff in real-time. Managers can control menus, create staff accounts, and assign stock permissions; waiters can take orders and manage drink stock; chefs can update food stock and track prepared items. TriLink ensures efficient communication, accurate stock management, and smooth workflow across all roles, showcasing a clean, modern full-stack implementation."
                        images={imagesTriLink}
                        techs={triLinkTechs}
                        done={false}
                    />
                </motion.div>

                <motion.div 
                    variants={cardVariants}
                    className='col-start-2 col-end-3'
                >
                    <ProjectCard 
                        title="CafeteríaSol"
                        description="CafeteríaSol es un sitio web moderno para una cafetería local, diseñado para mostrar el menú, productos destacados y promociones de manera atractiva. Incluye secciones de productos con imágenes de alta calidad, descripciones detalladas y precios, optimizado para dispositivos móviles y accesibilidad. El proyecto destaca por su diseño limpio, experiencia de usuario intuitiva y una implementación responsiva usando tecnologías actuales de frontend."
                        images={imagesCafeteriaSol}
                        techs={cafeteriaSolTechs}
                        liveLink={ Links['cafeteriasol'] }
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Projects;
