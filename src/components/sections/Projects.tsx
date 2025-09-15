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

    return(
        <section 
          id="projects" 
          aria-label="Personal Projects of Yahya Limouni"
          className="min-h-100 md:px-16 px-4 py-10
                     flex flex-col gap-12 items-center"
        >
            <h1 className="text-2xl font-bold text-gray-400/60">My Personal Projects</h1>

            <div className="w-full 
                            flex justify-center gap-6">
                <ProjectCard 
                    title="Image Manager"
                    description="An easy-to-use image processor for compressing, resizing, and converting different image file types."
                    images={imagesPicraft}
                    techs={picraftTechs}
                    githubLink={Links['github']['profile']}
                    liveLink={Links['picraft']}
                />

                <ProjectCard 
                    title="Blog API - Laravel"
                    description="A blog API, that manages authentications for admin and user roles, likes, comments, posts, shares. Respects all security standars."
                    images={imagesBlogAPI}
                    techs={blogAPITechs}
                    githubLink={Links['github']['blogapi']}
                />
            </div>
        </section>
    )
}

export default Projects;
