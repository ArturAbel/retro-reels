import { Hero } from "../../components/Hero/Hero";
import { MusicComponent } from "../../components/MusicComponent/MusicComponent";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import "./Home.css";
import { TvComponent } from "../../components/TvComponent/TvComponent";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const homeGalleryRef = useRef(null);
  const homeSectionRef = useRef(null);
  const musicSectionRef = useRef(null);
  const tvSectionRef = useRef(null);

  useGSAP(() => {
    const container = homeSectionRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          scrub: 2,
          pin: true,
          start: "top top",
          end: "+=3000",
        },
      })

      .to(container, {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          "px",
        ease: "none",
      });

    gsap.to(".col-1", {
      y: -400,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 2,
      },
    });
    gsap.to(".col-2", {
      y: 400,
      ease: "none",
      scrollTrigger: {
        trigger: homeGalleryRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 2,
      },
    }),
      gsap.to(".music-component-record-image", {
        y: -750,
        rotation: 500,
        ease: "none",
        scrollTrigger: {
          trigger: musicSectionRef.current,
          start: "top bottom",
          end: "+=2200",
          scrub: 1,
        },
      }),
      gsap.to(".tv-books-image2", {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: tvSectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
        },
      }),
      gsap.to(".tv-books-image1", {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: tvSectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
        },
      }),
      { scope: container };
  });

  return (
    <section ref={homeSectionRef} className="section-home">
      <Hero />
      <MusicComponent musicSectionRef={musicSectionRef} />
      <TvComponent tvSectionRef={tvSectionRef} />
    </section>
  );
};
