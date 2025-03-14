import { useState, useEffect } from "react";

export const useInnovativeSolutionsIteration = (arr: string[]) => {
  const [animate, setAnimate] = useState(true);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % arr.length);
        setAnimate(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return [arr[index], animate];
};
