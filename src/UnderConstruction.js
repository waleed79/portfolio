import React from 'react';
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction-overlay">
      <div className="under-construction-popup">
        <h1>🚧 This site is under construction 🚧</h1>
        <p>I am working hard to make this site available soon. Stay tuned!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
