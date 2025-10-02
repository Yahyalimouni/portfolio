import React from "react";
import '../../index.css'
import HeroImage from '../../assets/yahya.png'
import { Typewriter } from "react-simple-typewriter";
import { GoArrowRight } from "react-icons/go";


const Hero: React.FC = () => {
    return (
        <section
          role="hero"
          className="relative h-fit w-full flex items-center justify-center px-4 md:px-16 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
            
            {/* Left Column: Text */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              {/* Big Title */}
              <h1 className="text-center md:text-start text-3xl md:text-5xl font-extrabold tracking-tight leading-snug 
                             text-transparent bg-clip-text bg-gradient-to-r from-pr via-pr-l via-an-blue to-pr-d 
                             animate-left-fade-in">
                Fueled by caffeine, <br /> I turn{' '} 
                <span className="text-an-purple">
                  <Typewriter
                    words={['Laravel', 'React', 'TailwindCSS']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    cursorColor="blue"
                    typeSpeed={150}
                    deleteSpeed={50}
                    delaySpeed={1500} 
                  />
                </span>{' '} <br />
                into web magic.
              </h1>

              {/* Small text */}
              <p className="text-center md:text-start text-lg text-gray-400 max-w-xl animate-left-fade-in">
                I’m Yahya Limouni — a FullStack Developer who transforms coffee into modern, scalable, and user-friendly web solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-row align-center gap-10
                              animate-bottom-fade-in">
                <a href="/#contact" className="bg-gradient-to-r from-pr-smd to-pr-d 
                                                hover:opacity-50 duration-300
                                                font-bold text-pr-spd/75
                                                px-10 py-2.5
                                                text-lg
                                                rounded-md
                                                shadow-[0px_0px_4px_rgba(9,176,236,0.5)]
                                                tracking-wider">Hire me</a>
                <a href="/yahya_cv.pdf"
                   download="Yahya_Limouni_CV.pdf"
                   className="flex items-center justify-center gap-3
                              font-medium text-pr
                              hover:opacity-50 duration-300">
                  <span>Download CV</span> <GoArrowRight className="text-2xl"/>
                </a>
              </div>
            </div>

            {/* Right Column: Image with Glow */}
            <div className="relative flex justify-center items-center">
              {/* Big glow */}
              <div className="absolute md:w-[400px] aspect-square bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-300 opacity-30 blur-[120px] rounded-full -z-10" />

              {/* Smaller glow */}
              <div className="absolute md:w-[300px] aspect-square bg-gradient-to-br from-blue-400 to-green-300 opacity-40 blur-[80px] -bottom-10 -right-10 rounded-full z-11" />

              {/* Hero Image */}
              <img
                src={HeroImage}
                alt="Yahya Limouni Portrait"
                className="relative z-10 w-64 md:w-80 h-auto drop-shadow-2xl rounded-full animate-bottom-fade-in"
              />
              <div className="absolute top-0 bottom-0 right-10 md:w-[300px] rounded-full blur-3xl bg-black/30 z-20 "></div>
              <div className='absolute top-1/5 left-1/10 z-100 text-9xl text-pr font-extrabold animate-fade-in'>&lt;</div>
              <div className='absolute bottom-1/5 right-0 md:right-10 z-100 text-9xl text-pr font-extrabold animate-fade-in'>&gt;</div>
            </div>
          </div>
        </section>
    );
};

export default Hero;
