import React from "react";


type GlowButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    className?: string,
    href?: string
    header?: boolean
};


function GlowButton({ children, onClick, className='', href, header=false }: GlowButtonProps) {
    const roundedMatch = className.match(/\brounded(?:-(?:sm|md|lg|xl|2xl|3xl|full|\[[^\]]+\]|[a-z0-9]+))?\b/);
    const roundedClass = roundedMatch ? roundedMatch[0] : "rounded-2xl";

    
    return (
        <a 
            onClick={onClick}
            href={href}
            className={`relative 
                      text-m font-medium
                      bg-gradient-to-r from-pr-sml to-an-pink text-transparent bg-clip-text
                      hover:text-pr
                      bg-pr-spd 
                      px-4 py-2 ${roundedClass}
                      ${header ? '!hidden' : 'w-full'} flex items-center justify-center
                      transition duration-500
                      group 
                      md:w-fit
                      ${className || ''}`}>

            <div className={`absolute
                            w-full h-full
                            bg-pr-spd
                            -z-90
                            ${roundedClass}
                            `}></div>

            <div className={`absolute 
                            -z-100 
                            w-[calc(100%+3px)] 
                            h-[calc(100%+3px)] 
                            bg-gradient-to-r from-pr via-an-pink to-an-purple ${roundedClass} blur-xs
                            opacity-50 animate-pulse
                            group-hover:opacity-100 transition-all duration-500`}></div>
            { children }
        </a>
    )
}

export default GlowButton;
