import React from "react";
import forestpic from '../assets/images/forest.svg';

export default function HeroText() {
  return (
    <div className="relative... p-6  h-screen width-screen mx-auto bg-nvbg  bg-gradient-to-r from-primary ... items-center space-x-4">
   
    <div>
     <p className=" w-1/2 text-center top-80 px-8 m-  absolute leading-relaxed animate-fade-in-up tracking-widest left-20 
        text-dark  text-5xl font-black font-poppins">A way to make an impact with your own productivity. We plant a real life tree for every week of consistant use. </p>
       
     </div>
     <img className="absolute...   w-1/2 ml-4 top-60 px-8 absolute animate-fade-in-up  right-20"  src={forestpic} alt="logo"/>
  </div>
   
  );
}

