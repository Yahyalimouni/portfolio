import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


type Profile = {
    'id': number,
    'name': string,
    'href': string,
    'icon': React.ComponentType
};

const Profiles: React.FC = () => {
    const profiles: Profile[] = [
        {
            'id': 1,
            'name': 'LinkedIn',
            'href': 'https://www.linkedin.com/in/yahya-limouni02',
            'icon': FaLinkedinIn
        },
        {
            'id': 2,
            'name': 'GitHub',
            'href': 'https://www.github.com/Yahyalimouni',
            'icon': FaGithub 
        }
    ]
    return (
        <section className="w-full min-h-60 px-16 py-6
                        flex items-center justify-center gap-4
                        bg-gradient-to-t from-pr-spd/50 via-transparent to-transparent
                        backdrop-blur-3xl
                        ">
            {profiles.map((profile) => {
                const Icon = profile.icon;
                return(
                    <a  role="link"
                        key={profile.id}
                        href={profile.href}
                        className="flex items-center gap-2 min-w-20
                                    px-4 py-2 rounded-md
                                   bg-pr-spd text-gray-300/90
                                   hover:opacity-50 duration-400 ease-out"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon/> {profile.name}     
                    </a>
                )
            })}
        </section>
    )
} 

export default Profiles;