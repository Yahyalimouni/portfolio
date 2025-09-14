import React from "react";
import ProjectCard from '../ui/ProjectCard'
import PicraftHome from '../../assets/picraft/picraft_home.jpeg'
import PicraftTools from '../../assets/picraft/picraft_tools.jpeg'
import PicraftExample from '../../assets/picraft/picraft_processed_img.jpeg'
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { Links } from '../data/Links'


const Projects: React.FC = () => {
    const images = [PicraftHome, PicraftTools, PicraftExample];
    const techs = [
    { icon: IoLogoFigma, label: "Figma" },
    { icon: IoLogoJavascript, label: "JavaScript" },
    { icon: RiTailwindCssFill, label: "TailwindCSS" },
    { icon: FaLaravel, label: "Laravel" },
    { icon: FaFlask, label: "Flask" },
    { icon: FaPython, label: "Python" },
    { icon: FaDigitalOcean, label: "DigitalOcean" },
    { icon: SiGithubactions, label: "GitHub Actions" },
    ];

    return(
        <section 
          id="projects" 
          aria-label="Personal Projects of Yahya Limouni"
          className="min-h-100 md:px-16 px-4 py-10
                     flex flex-col gap-12 items-center"
        >
            <h1 className="text-2xl font-bold text-gray-400/60">My Personal Projects</h1>

            <div>
                <ProjectCard 
                    title="Image Manager"
                    description="An easy to use image procesor for compressing, resizing and converting images types."
                    images={images}
                    techs={techs}
                    githubLink={Links['github']}
                    liveLink={Links['picraft']}
                />
            </div>
        </section>
    )
}

export default Projects;
