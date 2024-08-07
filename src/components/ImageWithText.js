// ./Components/ImageWithText.js
import React from 'react';
import './ImageWithText.css';
import Banner from '../Assets/Photos/Banner.jpg'

const ImageWithText = ({ overlayText }) => {
    return (
      <div className="image-container">
        <img src={Banner} alt="no image" className="image" />
        <div className="overlay">
          <div className="text">{overlayText}</div>
        </div>
      </div>
    );
  };
  

export default ImageWithText;
