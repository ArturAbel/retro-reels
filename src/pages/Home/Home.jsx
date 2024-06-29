import { MusicComponent } from "../../components/MusicComponent/MusicComponent";
import { TvComponent } from "../../components/TvComponent/TvComponent";
import { FooterStrip } from "../../components/FooterStrip/FooterStrip";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const homeGalleryRef = useRef(null);
  const homeSectionRef = useRef(null);
  const musicSectionRef = useRef(null);
  const tvSectionRef = useRef(null);

  useGSAP(() => {
    gsap.to(".col-1", {
      x: -500,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 2,
      },
    });

    gsap.to(".col-2", {
      x: 500,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 2,
      },
    });

    gsap.to(".music-component-record-image", {
      x: 400,
      rotation: 500,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: "top 100%",
        end: "+=1800",
        scrub: 2,
      },
    });

    gsap.from(".tv-books-image2", {
      x: 700,
      rotate: 30,
      scrollTrigger: {
        trigger: musicSectionRef.current,
        start: "top bottom",
        end: "+=1100",
        scrub: 2,
      },
    });

    gsap.from(".tv-books-image1", {
      x: -600,
      rotate: 60,
      scrollTrigger: {
        trigger: musicSectionRef.current,
        ease: "power1.inOut",
        end: "+=1100",
        scrub: 2,
      },
    });
    gsap.from(".separator", {
      x: -450,
      duration: 7,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <section ref={homeSectionRef} className="section-home">
      <Hero />
      <MusicComponent musicSectionRef={musicSectionRef} />
      <TvComponent tvSectionRef={tvSectionRef} />
      <FooterStrip />
      <Footer />
    </section>
  );
};
