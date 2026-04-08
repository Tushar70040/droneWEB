import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); //  for one time animation 
        }
      },
      { threshold: 0.8, ...options }
    );

    if (ref.current)
       {
        //funtion call
        observer.observe(ref.current);
      }

    return () => observer.disconnect();
  },[] );

  return { ref, isVisible };
}
