import React from "react";
import { Sports, Spotlight } from "./components";

const App = () => {
  return (
    <div className="flex flex-col">
      <Sports />
      <Spotlight />
    </div>
  );
};

export default App;
