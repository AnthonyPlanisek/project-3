import React from 'react';
import { useQuery } from '@apollo/client';
import ProductColumn from '../components/ProductColumn'

const Productivity= () => {
    
    return (
      <main>
        {/* className="grid grid-cols-4" */}
        <div >
          
          <ProductColumn />
         
          {/* <ProductColumn />
          
          <ProductColumn /> */}
        </div>
      </main>
    );
  };

  export default Productivity;
