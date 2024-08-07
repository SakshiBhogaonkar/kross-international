// src/components/TextAndScrollSection.js

import React from 'react';
import './TextAndScrollSection.css';
import scrollImage1 from'../Assets/Photos/Banner.jpg'
import scrollImage2 from '../Assets/Photos/Banner.jpg'
import scrollImage3 from'../Assets/Photos/Banner.jpg'
import scrollImage4 from '../Assets/Photos/Banner.jpg'
import scrollImage5 from'../Assets/Photos/Banner.jpg'
import scrollImage6 from '../Assets/Photos/Banner.jpg'


const TextAndScrollSection = () => {
  return (
    <div className="section-container">
      <div className="text-only">
        <h2>Static Text Section</h2>
        <p>
          This is the text-only section. You can add any static content here, such as paragraphs,
          headings, or any other text content you want to display.
        </p>
      </div>
      <div className="scrollable-content">
        <h2>Scrollable Content Section</h2>
        <img src={scrollImage1} alt="Scroll Image 1" />
        <p>
          This is some scrollable content. You can add images and text here. The content will
          scroll if it exceeds the maximum height.
        </p>
        <img src={scrollImage2} alt="Scroll Image 2" />
        <p>
          Add more content here. This section is useful for displaying a large amount of content in
          a limited space.
        </p>
        <img src={scrollImage1} alt="Scroll Image 3" />
        <p>
          This is some scrollable content. You can add images and text here. The content will
          scroll if it exceeds the maximum height.
        </p>
        <img src={scrollImage1} alt="Scroll Image 4" />
        <p>
          This is some scrollable content. You can add images and text here. The content will
          scroll if it exceeds the maximum height.
        </p>
        <img src={scrollImage1} alt="Scroll Image 5" />
        <p>
          This is some scrollable content. You can add images and text here. The content will
          scroll if it exceeds the maximum height.
        </p>
        <img src={scrollImage1} alt="Scroll Image 6" />
        <p>
          This is some scrollable content. You can add images and text here. The content will
          scroll if it exceeds the maximum height.
        </p>
        {/* Add more images and text as needed */}
      </div>
    </div>
  );
};

export default TextAndScrollSection;
