// App.js
import React from 'react';
import Header from './components/Header';
import ImageWithText from './components/ImageWithText';
import TextAndScrollSection from './components/TextAndScrollSection.js';
import ProductSlider from './components/ProductSlider.js';


const App = () => {
  return (
    <div>
      <Header />
      <ImageWithText
        imageSrc=""
        altText="Sample Image"
        overlayText="Welcome to Kross International Sealing Solutions"
      />
      <TextAndScrollSection />
      <ProductSlider />

    </div>
  );
};

export default App;
