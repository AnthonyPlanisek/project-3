import React from "react";
import plantrlogo from '../assets/images/plantrlogo.svg';

export default function HeroText() {
  return (
    <div className="relative... p-6  h-screen width-screen mx-auto bg-nvbg  bg-gradient-to-r from-primary ... items-center space-x-4">
   
    <div>
     <p className=" w-1/3 top-80 px-8 m-4  absolute leading-relaxed animate-fade-in-up tracking-widest left-20 
        text-dark  text-5xl font-black font-poppins">A way to improve productivity and help save the planet.</p>
       
     </div>
     <img className="absolute...   w-1/2 m-4 top-80 px-8 absolute animate-fade-in-up  right-20"  src={plantrlogo} alt="logo"/>
  </div>
   
  );
}

