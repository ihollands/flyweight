import { useEffect, useState, useRef } from 'react';

interface Options {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
}

type Handler = (
  entry: IntersectionObserverEntry,
  obs: IntersectionObserver,
  fn: (val: boolean) => void
) => void;

const useIntersection = (options: Options = {}, handler: Handler) => {
  const elRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], obs) => {
      handler(entry, obs, setIsVisible);
    }, options);

    observer.observe(elRef.current);

    return () => observer.disconnect();
  }, [elRef, options]);

  return {
    elRef,
    isVisible,
  };
};

export default useIntersection;
