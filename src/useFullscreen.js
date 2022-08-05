import { useEffect, useRef } from "react";

export const useFullscreen = (isFull, setIsFull) => {
  const element = useRef();

  const triggerFullscreen = (state) => {
    console.log(state);
    if (element.current) {
      if (isFull) {
        console.log(1);
        element.current.requestFullscreen();
      } else {
        console.log(2);
        document.exitFullscreen();
      }
    }
  };
  useEffect((isFull) => {
    setIsFull(!isFull);
    console.log(isFull);
  }, []);
  return { element, triggerFullscreen };
};
