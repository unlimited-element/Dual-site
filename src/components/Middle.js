import React from 'react';
import two from '../images/2.png';
import twoC from '../images/2c.png';

function Middle() {
  return (
    <div className="App">
      <picture>
        <source 
          srcset={twoC}
          media="(max-width: 900px)"
        />
        <img 
          src={two}
          alt=""
        />
      </picture>
    </div>
  );
}

export default Middle;
