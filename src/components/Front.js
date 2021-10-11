import React from 'react';
import one from '../images/1.png';
import oneC from '../images/1c.png';

function Front() {
  return (
    <div className="App" >
     <picture>
        <source 
          srcset={oneC}
          media="(max-width: 900px)"
        />
        <img 
          src={one}
          alt=""
        />
      </picture>
    </div>
  );
}

export default Front;
