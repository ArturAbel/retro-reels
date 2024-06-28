import { GalleryImage } from "../GalleryImage/GalleryImage";
import { SpinnerItem } from "../SpinnerItem/SpinnerItem";
import {
  heroImages1,
  heroImages2,
  arrowHero,
  heroSpinners,
  heroImage,
} from "../../utilities/variables";

import "./Hero.css";

export const Hero = ({ homeGalleryRef }) => {
  return (
    <section className="section-hero">
      <div className="hero-container">
        <div className="hero-menu">
          <div className="hero-menu-container">
            <button className="button hero-menu-button ">menu</button>
          </div>
          <h4 className="hero-title">retro reels</h4>
          <img className="hero-arrow" src={arrowHero}></img>
        </div>
        {heroSpinners.map((image, index) => {
          return <SpinnerItem key={index} image={image} index={index} />;
        })}
        <img className="hero-image" src={heroImage} alt="hero image" />
      </div>
      <div className="hero-galleries-container">
        <div ref={homeGalleryRef} className="hero-gallery">
          <div className="hero-gallery-col col-1">
            {heroImages1.map((image, index) => {
              return <GalleryImage key={index} image={image} />;
            })}
          </div>
          <div className="hero-gallery-col  col-2">
            {heroImages2.map((image, index) => {
              return <GalleryImage key={index} image={image} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
