import React, { type ElementType } from "react";


type SkillCardProps = {
    name: string,
    logo: ElementType,
    className?: string
}

const SkillCard: React.FC<SkillCardProps> = ({name, logo:Logo, className}) => {
    return (
        <div
            className="flex flex-col items-center gap-2 
                       p-4 min-w-fit md:w-40 w-full
                       bg-pr-d/40
                       rounded-2xl shadow-[0_0_10px_rgba(22,33,88,1)]"
        >
            <Logo className={`text-3xl md:text-5xl ${className || ""}`}/>
            <p className="font-medium text-pr-l">{name}</p>
        </div>
    )
}

export default SkillCard;
