import React from "react";
import TrafficLight from "./components/TrafficLight";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Traffic Light Simulation</h1>
      <TrafficLight />
    </div>
  );
};

export default App;
