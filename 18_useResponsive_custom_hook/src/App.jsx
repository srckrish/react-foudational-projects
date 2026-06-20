import React from "react";
import useResponsive from "./useResponsive";

function App() {
  const windowSize = useResponsive();
  const { width, height } = windowSize;
  return (
    <div className="wrapper min-h-screen flex items-center justify-center">
      <h2>
        Window Size: {width} x {height}
      </h2>
    </div>
  );
}

export default App;
