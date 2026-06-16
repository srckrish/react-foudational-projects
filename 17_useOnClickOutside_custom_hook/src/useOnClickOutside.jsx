import React, { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  function listener(e) {
    if (!ref.current || ref.current.contains(e.target)) return;
    handler(e);
  }

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", () => listener());
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
