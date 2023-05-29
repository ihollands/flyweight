import { useEffect, useState, useRef } from 'react';

interface Options {
  root?: HTMLElement;
  threshold?: number;
}

const useVisible = (options: Options = {}) => {
  const elRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(elRef.current);

    return () => observer.disconnect();
  }, [elRef, options]);

  return {
    elRef,
    isVisible,
  };
};

export default useVisible;
