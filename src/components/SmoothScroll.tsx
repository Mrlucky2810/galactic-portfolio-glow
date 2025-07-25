// src/components/SmoothScroll.tsx
import { useEffect, useRef, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple smooth scrolling implementation
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('click', handleSmoothScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleSmoothScroll);
      }
    };
  }, []);

  // Enhanced CSS for smooth scrolling
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
      <div
          ref={scrollRef}
          className="relative"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
      >
        {children}
      </div>
  );
};

export default SmoothScroll;