import { heroSpinners, heroImage } from "../../utilities/variables";
import { SpinnerItem } from "../SpinnerItem/SpinnerItem";
import { HeroGallery } from "../HeroGallery/HeroGallery";
import { Navbar } from "../Navbar/Navbar";

import "./Hero.css";

export const Hero = ({ homeGalleryRef }) => {
  return (
    <>
      <section className="section-hero">
        <Navbar
          background={"hero-button-background"}
          color={"hero-title-color"}
        />
        <div className="hero-container">
          {heroSpinners.map((image, index) => (
            <SpinnerItem key={index} image={image} index={index} />
          ))}
          <img
            className="hero-image"
            alt="hero image"
            src={heroImage}
            loading="eager"
          />
        </div>
      </section>
      <HeroGallery homeGalleryRef={homeGalleryRef} />
    </>
  );
};
