
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ref = useRef<HTMLDivElement>(null);

  const animateIn = (duration = 1, delay = 0) => {
    if (ref.current) {
      gsap.fromTo(ref.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8 
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out"
        }
      );
    }
  };

  const animateOnScroll = (trigger?: string) => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trigger || ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  };

  const staggerAnimation = (selector: string, delay = 0.1) => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll(selector);
      gsap.fromTo(elements,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%"
          }
        }
      );
    }
  };

  return { ref, animateIn, animateOnScroll, staggerAnimation };
};
