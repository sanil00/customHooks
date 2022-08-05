import { useEffect } from "react";

export const useBeforeLeave = (onTopLeave) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onTopLeave();
    }
  };

  useEffect(() => {
    console.log("c");
    document.addEventListener("mouseleave", handle);
    // return console.log("b");
    return () => console.log("a");
  }, []);
};
