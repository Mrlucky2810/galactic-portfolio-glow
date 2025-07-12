
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });
    }

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
