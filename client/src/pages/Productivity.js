import React from 'react';
import { useQuery } from '@apollo/client';
import ProductColumn from '../components/ProductColumn'

const Productivity= () => {
    
    return (
      <main>
        <div className="grid grid-cols-4">
          
          <ProductColumn />
         
          <ProductColumn />
          
          <ProductColumn />
        </div>
      </main>
    );
  };

  export default Productivity;
