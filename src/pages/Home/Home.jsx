import { MusicComponent } from "../../components/MusicComponent/MusicComponent";
import { TvComponent } from "../../components/TvComponent/TvComponent";
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
    const vh = (percentage) => window.innerHeight * (percentage / 100);

    gsap.to(".col-1", {
      x: -300,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 2,
      },
    });

    gsap.to(".col-2", {
      x: 300,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 2,
      },
    });

    gsap.to(".music-component-record-image", {
      x: 350,
      rotation: 500,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: vh(100) + " top",
        end: vh(10) + " top",
        scrub: 2,
      },
    });

    gsap.from(".tv-books-image1", {
      x: -600,
      rotate: 60,
      scrollTrigger: {
        trigger: musicSectionRef.current,
        ease: "power1.inOut",
        start: vh(0) + " top",
        end: vh(80) + " top",
        scrub: 2,
      },
    });

    gsap.from(".tv-books-image2", {
      x: 700,
      rotate: 30,
      scrollTrigger: {
        trigger: musicSectionRef.current,
        start: vh(0) + " top",
        end: vh(80) + " top",
        scrub: 2,
      },
    });

    gsap.from(".footer-strip", {
      x: -440,
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
      <Footer />
    </section>
  );
};
