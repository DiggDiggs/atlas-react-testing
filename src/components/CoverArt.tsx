import React from 'react';
import placeholderImage from "../assets/placeholder.svg";

const CoverArt: React.FC = () => {
  return (
    <div className="cover-art mb-6">
      <img 
        src={placeholderImage}
        alt="Placeholder Cover Art Image"
        className="rounded-md h-96"
      />
    </div>
  );
};

export default CoverArt;
