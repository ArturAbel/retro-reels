import { heroSpinners, heroImage } from "../../utilities/variables";
import { SpinnerItem } from "../SpinnerItem/SpinnerItem";
import { HeroGallery } from "../HeroGallery/HeroGallery";
import { Link } from "react-router-dom";

import "./Hero.css";

export const Hero = ({ homeGalleryRef }) => {
  return (
    <>
      <section className="section-hero">
        <div className="hero-menu">
          <Link to={"nav"} className="button hero-menu-button">
            menu
          </Link>
          <h4 className="hero-title">retro reels</h4>
        </div>
        <div className="hero-container">
          {heroSpinners.map((image, index) => (
            <SpinnerItem key={index} image={image} index={index} />
          ))}
          <img className="hero-image" src={heroImage} alt="hero image" />
        </div>
      </section>
      <HeroGallery homeGalleryRef={homeGalleryRef} />
    </>
  );
};
