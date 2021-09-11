import React from "react";
import { useInView } from "react-intersection-observer";
import graphpic from '../assets/images/graphpic.JPG';



export default function Component() {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <div>
    <div className="relative... p-6 h-screen width-screen mx-auto bg-nvbg  bg-gradient-to-r from-primary ... flex items-center space-x-4">
   
    <div>
     <p ref={ref} className={`w-1/3 px-8 absolute leading-relaxed tracking-widest left-40 
        text-dark  text-5xl font-bold font-poppins h-40 opacity-0${inView ? " animate-fade-in-up": ""}`}>Chart your progress and compare with friends to see who can be the most productive.</p>
    </div>
    <img className="absolute...   w-1/2 px-8 absolute animate-fade-in-up mt-60 right-10"  src={graphpic} alt="logo"/>
  </div>
   </div>
  );
};