import React from "react";
import Image1 from "./images/KFCfinal.png";
import Image2 from "./images/Adidasfinal.png";
import Image3 from "./images/RayBanfinal.png";
import Image4 from "./images/Redmifinal.png";
import Image5 from "./images/Swiggy&Zomatofinal.png";
import Image6 from "./images/UrbanPlusfinal.png";
import Image7 from "./images/Cosmofeedfinal.png";
import Image8 from "./images/CafeMulberryfinal.png";

import ImageCard from "./ImageCard";

const ImageSection: React.FC = () => {
  const images = [
    { src: Image1, alt: "KFC" },
    { src: Image2, alt: "Adidas" },
    { src: Image3, alt: "RayBan" },
    { src: Image4, alt: "Redmi" },
    { src: Image5, alt: "Swiggy & Zomato" },
    { src: Image6, alt: "UrbanPlus" },
    { src: Image7, alt: "Cosmofeed" },
    { src: Image8, alt: "Cafe Mulberry" },
  ];

  return (
    <section className="relative py-20 bg-primary border-t border-secondary">
      <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
        Brands we admire and collaborated with
      </h3>
      <h4 className="text-lg md:text-2xl lg:text-3xl text-gray-300 text-center mt-4">
        A Glimpse into Our Success Stories and Creative Impact
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-4">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            index={index}
            totalImages={images.length} // Ensure this is passed correctly
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
