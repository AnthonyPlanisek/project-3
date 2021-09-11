import React from 'react';
import { useQuery } from '@apollo/client';
import HeroText4 from '../components/HeroText4';
import HeroText3 from '../components/HeroText3';
import HeroText2 from '../components/HeroText2';
import HeroText from '../components/HeroText';


const Productivity= () => {
    
    return (
      <main>
    

       <HeroText />
       <HeroText2 />
          <HeroText3 />
       <HeroText4 />
      
      </main>
    );
  };

  export default Productivity;