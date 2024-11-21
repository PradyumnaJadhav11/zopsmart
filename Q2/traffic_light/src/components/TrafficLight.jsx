import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const sequence = [
      { color: "green", duration: 3000 },
      { color: "yellow", duration: 2000 },
      { color: "red", duration: 5000 },
      { color: "yellow", duration: 2000 },
    ];

    let index = 0;

    const changeColor = () => {
      setColor(sequence[index].color);
      index = (index + 1) % sequence.length;
    };

    const interval = setInterval(() => {
      changeColor();
    }, sequence[index].duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        borderRadius: "50%",
        margin: "50px auto",
        border: "2px solid black",
      }}
    ></div>
  );
};

export default TrafficLight;
