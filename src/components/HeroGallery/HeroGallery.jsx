import { heroImages1, heroImages2 } from "../../utilities/variables";
import { GalleryImage } from "../GalleryImage/GalleryImage";

import "./HeroGallery.css";

export const HeroGallery = ({ homeGalleryRef }) => {
  return (
    <div className="hero-galleries-container">
      <div ref={homeGalleryRef} className="hero-gallery">
        <div className="hero-gallery-col col-1">
          {heroImages1.map((image, index) => (
            <GalleryImage key={index} image={image} />
          ))}
        </div>
        <div className="hero-gallery-col col-2">
          {heroImages2.map((image, index) => (
            <GalleryImage key={index} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};
