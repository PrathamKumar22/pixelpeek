import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />
      <p>By {image.user.name}</p>
    </div>
  );
};

export default ImageCard;
