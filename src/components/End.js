import React from 'react';
import three from '../images/3.png';
import threeC from '../images/3c.png';

function End() {
  return (
    <div className="App">
      <picture>
        <source 
          srcset={threeC}
          media="(max-width: 900px)"
        />
        <img 
          src={three}
          alt=""
        />
      </picture>
    </div>
  );
}

export default End;
