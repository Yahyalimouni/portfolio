import React, { useState, type ElementType } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


type Tech = {
  icon: ElementType;
  label: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  githubLink?: string;
  liveLink?: string;
  techs?: Tech[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    images,
    githubLink,
    liveLink,
    techs = [],
}) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () =>
        setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative bg-pr-spd rounded-2xl shadow-lg overflow-hidden flex flex-col gap-4 p-4 w-1/3 h-fit group/card">
            {/* Light Effect */}
            <div className="absolute bottom-0 right-0
                        w-1/2 h-1/4
                        bg-gradient-to-br from-pr/100 via-yellow-300/50 to-an-purple blur-2xl opacity-50
                        rounded-full
                        group-hover:scale-[1.2] group-hover/card:opacity-100 transition duration-300 ease"></div>

            <div className="absolute top-0 left-0
                        w-1/2 h-1/4
                        bg-gradient-to-br from-pr/100 via-an-pink/50 to-an-purple blur-2xl opacity-50
                        rounded-full
                        group-hover:scale-[1.2] group-hover/card:opacity-100 transition duration-300 ease"></div>

            {/* Wrapper */}
            <div className="z-10">      
                {/* --------- Image Slider --------- */}
                <div className="relative w-full h-64 md:h-auto rounded-xl overflow-hidden group">
                    <img
                    src={images[currentImage]}
                    alt={`${title} screenshot ${currentImage + 1}`}
                    className="w-full h-full object-cover 
                                rounded-xl
                                group-hover:scale-[1.1] transition duration-500 ease-in-out"
                    />

                    {/* Slider buttons */}
                    {images.length > 1 && (
                    <>
                        <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 
                                    bg-black/50 text-white 
                                    rounded-full 
                                    p-1 
                                    hover:bg-pr-d duration-300
                                    cursor-pointer"
                        >
                        &#10094;
                        </button>
                        <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 
                                    bg-black/50 text-white 
                                    rounded-full 
                                    p-1 
                                    hover:bg-pr-d duration-300
                                    cursor-pointer"
                        >
                        &#10095;
                        </button>
                    </>
                    )}
                </div>

                {/* --------- Content --------- */}
                <div className="flex flex-col justify-between flex-1 gap-4">
                    {/* Title & Description */}
                    <div>
                    <h3 className="text-2xl font-bold text-pr-sml">{title}</h3>
                    <p className="text-gray-300 mt-2">{description}</p>
                    </div>

                    {/* Tech icons */}
                    {techs.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                            {techs.map((t, idx) => {
                                const Icon = t.icon;
                                return (
                                    <div key={idx} className="relative flex flex-col items-center cursor-pointer group/icons">
                                        <Icon className="text-2xl text-pr-sml/50 
                                                        group-hover/icons:text-pr group-hover/icons:scale-[1.2] 
                                                        duration-300 ease transition-all" />

                                        {/* Label only shows for THIS icon */}
                                        <span
                                        className="absolute bottom-[calc(100%+3px)] mt-1
                                                    opacity-0 group-hover/icons:opacity-100
                                                    bg-pr-xspd text-pr-spl text-xs px-2 py-1 rounded
                                                    transition-opacity duration-300
                                                    whitespace-nowrap"
                                        >
                                        {t.label}
                                        </span>
                                    </div>
                                );
                            })
                    }
                    </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4 w-full">
                    {/* Github Link */}
                    {githubLink && (
                        <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2
                                    w-full  
                                    px-4 py-2 
                                    bg-gray-500/50
                                    font-medium
                                    hover:bg-gray-600/50 
                                    rounded-lg transition duration-300 ease-in-out"
                        >
                            <FaGithub />{" "}
                            Source Code
                        </a>
                    )}

                    {/* Github Link */}
                    {liveLink && (
                        <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2
                                    w-full 
                                    px-4 py-2 
                                    bg-pr-sml 
                                    hover:opacity-50 transition duration-300 ease-in-out
                                    rounded-lg
                                    text-pr-spd font-bold"
                        >
                        <FaExternalLinkAlt />{" "}
                        Live Demo
                        </a>
                    )}
                    </div>
                </div>
        </div>
        </div>
    );
};

export default ProjectCard;
