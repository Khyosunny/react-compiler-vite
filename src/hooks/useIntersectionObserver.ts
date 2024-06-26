import { useEffect, useRef } from "react";

interface Props {
  options?: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  };
}

const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
  callback: IntersectionObserverCallback,
  options: Props["options"] = { root: null, rootMargin: "0px", threshold: [0.1] }
): React.RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(callback, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [callback, options]);

  return ref as React.RefObject<T>;
};

export default useIntersectionObserver;
