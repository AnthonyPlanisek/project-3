import React from "react";
import { useInView } from "react-intersection-observer";



export default function Component() {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <div className="relative... p-6 h-screen width-screen mx-auto bg-nvbg  bg-gradient-to-r from-primary ... flex items-center space-x-4">
   
    <div>
     <p ref={ref} className={`w-1/2 px-8 absolute leading-relaxed tracking-widest left-40 
        text-dark  text-5xl font-bold font-poppins h-40 opacity-0${inView ? " animate-fade-in-up": ""}`}>Maintain proper productivity by keeping track of all your daily habits, good or bad.</p>
    </div>
  </div>
   
  );
};


// export default function HeroText2() {
//   return (
//     <div className="relative... p-6 h-60 max-w-sm mx-auto bg-nvbg rounded-xl  flex items-center space-x-4">
   
//     <div>
//      <p className=" bottom-10 right-5 w-1/3 px-8 w-1 absolute leading-relaxed animate-fade-in-up tracking-widest left-20 
//      text-dark  text-5xl font-bold font-poppins">Setting a goal is like planting a seed. .</p>
//     </div>
//   </div>
   
//   );
// }
  