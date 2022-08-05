import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1000) => {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `all ${duration}ms`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
